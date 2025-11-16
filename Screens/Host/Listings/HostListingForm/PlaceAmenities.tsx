import {
  View,
  ScrollView,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
} from "react-native-safe-area-context";
import { HostListingFormStyles } from "./HostListingFormStyles";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors } from "../../../../Constants";
import { useNavigation } from "@react-navigation/native";
import { PlaceAmenitiesProps } from "../../../../Navigation/HostNavigation";
import { apartmentAmenitiesType } from "./HostListingFormTypes/apartmentAmenitiesTypes";
import ShowMoreAmenitiesModal from "./HostListingFormComponents/ShowMoreAmenitiesModal";

const paginationTabs = [
  "TabOne",
  "TabTwo",
  "TabThree",
  "TabFour",
  "TabFive",
  "TabSix",
];

type AmenitiesCategory = {
  category: string;
  amenities: string[];
};

export type AmenityState = {
  [category: string]: {
    [amenity: string]: boolean;
  };
};

const generateInitialState = (data: AmenitiesCategory[]): AmenityState => {
  const state: AmenityState = {};
  data.forEach((cat) => {
    state[cat.category] = {};
    cat.amenities.forEach((item) => {
      state[cat.category][item] = false;
    });
  });
  return state;
};

export default function PlaceAmenities({ route }: PlaceAmenitiesProps) {
  const navigation = useNavigation<PlaceAmenitiesProps["navigation"]>();
  const [showFullAmenitiesModal, setShowFullAmenitiesModal] =
    useState<apartmentAmenitiesType | null>(null);
  const { apartmentAmenities, office_Business_Amenities } = route.params;
  const placeAmenities = apartmentAmenities
    ? apartmentAmenities
    : office_Business_Amenities;
  const [amenityState, setAmenityState] = useState<AmenityState>(
    generateInitialState(placeAmenities)
  );


  const toggleAmenity = (category: string, amenity: string) => {
    setAmenityState((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [amenity]: !prev[category][amenity],
      },
    }));
  };

 

  const goBackBtn = () => {
    navigation.goBack();
  };

  console.log("Tesla: ", amenityState);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={HostListingFormStyles.headerNavCont}>
        <Ionicons
          onPress={goBackBtn}
          name="chevron-back"
          size={20}
          color={Colors.grayText}
        />
        <View style={HostListingFormStyles.paginationCont}>
          {paginationTabs.map((_, index) => (
            <View
              key={`item-${index}`}
              style={[
                HostListingFormStyles.tabView,
                {
                  borderTopLeftRadius: (index + 1) % 2 === 0 ? 0 : 5,
                  borderBottomLeftRadius: (index + 1) % 2 === 0 ? 0 : 5,
                  borderBottomRightRadius: (index + 1) % 2 === 0 ? 5 : 0,
                  borderTopRightRadius: (index + 1) % 2 === 0 ? 5 : 0,
                  marginRight: (index + 1) % 2 === 0 ? 5 : 0,
                  backgroundColor:
                    index + 1 <= 2
                      ? Colors.purpleLight
                      : Colors.purpleTransparent,
                },
              ]}
            />
          ))}
        </View>
        <View>
          <MaterialIcons name="save-alt" size={20} color={Colors.grayText} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
      >
        <View style={{ flex: 1 }}>
          <View>
            <Text style={HostListingFormStyles.TOPHeaderText}>
              What does your space offers?
            </Text>
            <Text style={HostListingFormStyles.TOPHeaderDescText}>
              Add all the amenities available so renters have full confidence
              before booking.
            </Text>
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          {placeAmenities.map((item, index) => (
            <View key={`index-${index}`} style={{ marginBottom: 20 }}>
              <View
                style={HostListingFormStyles.amenitiesHeaderLabel}
              >
                <MaterialCommunityIcons
                  name={
                    item.category === "Utilities"
                      ? "flash"
                      : item.category === "Security"
                      ? "shield-check"
                      : item.category === "Comfort & Interior"
                      ? "sofa"
                      : item.category === "Work Facilities"
                      ? "office-building"
                      : item.category === "Communication & Connectivity"
                      ? "lan-connect"
                      : "home-city-outline"
                  }
                  size={24}
                  color={Colors.purpleLight}
                />

                <Text
                  style={HostListingFormStyles.amenitiesCategoryText}
                >
                  {item.category}
                </Text>
              </View>

              {item.amenities.slice(0, 11).map((amenities, index) => {
                if (index === 10) {
                  return (
                    <Pressable
                      onPress={() => setShowFullAmenitiesModal(item)}
                      key={`amenities-${index}`}
                      style={HostListingFormStyles.seeMoreAmenitiesBtn}
                    >
                      <Text style={HostListingFormStyles.TopTextStyle}>More amenities</Text>
                    </Pressable>
                  );
                } else {
                  const checked = amenityState[item.category][amenities];
                  return (
                    <Pressable
                      onPress={() => toggleAmenity(item.category, amenities)}
                      key={`amenities-${index}`}
                      style={HostListingFormStyles.amenitiesText}
                    >
                      <MaterialIcons
                        name={checked ? "check-box" : "check-box-outline-blank"}
                        size={30}
                        color={checked ? Colors.purpleLight : Colors.gray}
                      />
                      <Text style={HostListingFormStyles.TopTextStyle}>
                        {amenities}
                      </Text>
                    </Pressable>
                  );
                }
              })}
            </View>
          ))}
        </View>
      </ScrollView>

      {showFullAmenitiesModal && (
         <ShowMoreAmenitiesModal showFullAmenitiesModal={showFullAmenitiesModal} setShowFullAmenitiesModal={setShowFullAmenitiesModal} amenityState={amenityState} toggleAmenity={toggleAmenity}/>
      )}
      <View style={HostListingFormStyles.getStartedBtnCont}>
        <Pressable onPress={() => {}} style={HostListingFormStyles.nextBtn}>
          <Text style={HostListingFormStyles.getStartedText}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}