import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Colors } from "../../../Constants";
import PriceRangeSlider from "./FiltersComponent/PriceRangeSlider/priceRangeSlider";
import LocationBottomSheet from "./FiltersComponent/SearchLocation/locationBottomSheet";
import SortByOrder from "./FiltersComponent/sortByOrder";
import { useNavigation } from "@react-navigation/native";
import { FilterStyles } from "./filterStyles";

export default function Filters() {
  const [openLocationBottomSheet, setOpenLocationBottomSheet] = useState(false);
  const [openSortByOrderModal, setOpenSortByOrderModal] = useState(false);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteBgColor }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >
          <View style={FilterStyles.stickyHeaderContainer}>
            <View style={FilterStyles.makeRow}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={FilterStyles.backNavBtn}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={Colors.grayText}
                />
              </Pressable>
              <Text style={FilterStyles.stickyHeaderText}>Filter</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <View>
              <View style={FilterStyles.listingStatusContainer}>
                <View style={FilterStyles.listingStatusBox}>
                  <Text style={FilterStyles.listingStatusText}>Live</Text>
                </View>
                <View style={FilterStyles.listingStatusBox}>
                  <Text style={FilterStyles.listingStatusText}>InActive</Text>
                </View>
                <View style={FilterStyles.listingStatusBox}>
                  <Text style={FilterStyles.listingStatusText}>Rented</Text>
                </View>
              </View>
              <View style={{ marginBottom: 20 }}>
                <Text style={FilterStyles.headerLabelText}>Property Type</Text>
                <View style={FilterStyles.propertyTypeContainer}>
                  <View
                    style={[
                      FilterStyles.propertyType,
                      { backgroundColor: Colors.purpleLight },
                    ]}
                  >
                    <Text
                      style={[
                        FilterStyles.propertyTypeText,
                        { color: Colors.white },
                      ]}
                    >
                      All
                    </Text>
                  </View>
                  <View style={FilterStyles.propertyType}>
                    <Text style={FilterStyles.propertyTypeText}>Apartment</Text>
                  </View>
                  <View style={FilterStyles.propertyType}>
                    <Text style={FilterStyles.propertyTypeText}>Hostel</Text>
                  </View>
                  <View style={FilterStyles.propertyType}>
                    <Text style={FilterStyles.propertyTypeText}>
                      Office Space
                    </Text>
                  </View>
                  <View style={FilterStyles.propertyType}>
                    <Text style={FilterStyles.propertyTypeText}>
                      Retail Space
                    </Text>
                  </View>
                  <View style={FilterStyles.propertyType}>
                    <Text style={FilterStyles.propertyTypeText}>
                      Event Space
                    </Text>
                  </View>
                  <View style={FilterStyles.propertyType}>
                    <Text style={FilterStyles.propertyTypeText}>
                      Commercial Space
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ marginBottom: 20 }}>
                <Text style={FilterStyles.headerLabelText}>Price</Text>
                <View>
                  <PriceRangeSlider />
                </View>
              </View>

              <View style={{ marginBottom: 20 }}>
                <Text style={FilterStyles.headerLabelText}>Location</Text>
                <Pressable
                  onPress={() => setOpenLocationBottomSheet(true)}
                  style={FilterStyles.locationPressableBox}
                >
                  <Text style={FilterStyles.propertyTypeText}>
                    Lagos, Nigeria
                  </Text>
                  <Feather name="chevron-down" size={24} color={Colors.black} />
                </Pressable>
              </View>

              <View style={{ marginBottom: 20 }}>
                <Text style={FilterStyles.headerLabelText}>Sort by Order</Text>
                <Pressable
                  onPress={() => setOpenSortByOrderModal(true)}
                  style={FilterStyles.sortByOrderPressableBox}
                >
                  <Text style={FilterStyles.propertyTypeText}>
                    Newest to Oldest
                  </Text>
                  <Feather name="chevron-down" size={24} color={Colors.black} />
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={FilterStyles.filterBottomContentContainer}>
          <View style={FilterStyles.resetBox}>
            <Text style={FilterStyles.resetText}>Reset</Text>
          </View>
          <View style={FilterStyles.applyBox}>
            <Text style={FilterStyles.applyText}>Apply (1000)</Text>
          </View>
        </View>
        {openLocationBottomSheet && (
          <LocationBottomSheet
            setOpenLocationBottomSheet={setOpenLocationBottomSheet}
            openLocationBottomSheet={openLocationBottomSheet}
          />
        )}
        {openSortByOrderModal && (
          <SortByOrder setOpenSortByOrderModal={setOpenSortByOrderModal} />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
