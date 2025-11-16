import { Dimensions, LayoutChangeEvent, Pressable, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { apartmentsData } from "../../../../assets/data/apartmentsData";
import ApartmentsCard from "./ApartmentsCard";
import { apartmentDataTypes } from "./listingTypes";
import ListingHeaderFilters from "./ListingHeaderFilters";
import ListingHeaderHostIcon from "./ListingHeaderHostIcon";
import { Colors } from "../../../../Constants";
import { AntDesign } from "@expo/vector-icons";
import NoAparments from "./NoAparments";
import { useNavigation } from "@react-navigation/native";

const emptyList = {
  id: "emptyData",
  title: "",
  description: "",
  type: "",
  subtype: "",
  location: {
    address: "",
    city: "",
    state: "",
    latitude: 0,
    longitude: 0,
  },
  images: [""],
  rooms: {
    bedrooms: 0,
    bathrooms: 0,
    livingRooms: 0,
    kitchen: 0,
    balcony: false,
  },
  amenities: ["Gym", "CCTV", "Generator"],
  rental: {
    price: 0,
    currency: "",
    durationType: "",
    minStayMonths: 0,
    maxStayMonths: 0,
  },
  availability: {
    status: "PENDING",
    isAvailable: false,
    availableFrom: "0",
  },
  host: {
    id: "",
    name: "",
    profileImage: "",
    verificationStatus: "",
    rating: 0,
    totalReviews: 0,
  },
  contact: {
    phone: "",
    email: "",
  },
  createdAt: "",
  updatedAt: "",
  tags: ["Secure", "Affordable", "Apartment"],
  views: 0,
  favorites: 0,
};

const width = Dimensions.get("window").width;
const WIDTH = width;
const emptyData = [apartmentsData[0], apartmentsData[1], emptyList]
const allAparmentsData = [...emptyData];

export default function ApartmentsList() {
  const flashlistHeightRef = useRef(0);
  const hostHeaderHeightRef = useRef(0);
  const filterHeaderHeightRef = useRef(0);
  const [noApartmentsHeight, setNoApartmentsHeight] = useState(0);
  const navigation = useNavigation<any>()

  const getHostHeaderHeight = (height: number) => {
    hostHeaderHeightRef.current = height;
  };

  const getFilterHeaderHeight = (height: number) => {
    filterHeaderHeightRef.current = height;
    console.log(
      "m: ",
      flashlistHeightRef.current -
        (hostHeaderHeightRef.current + filterHeaderHeightRef.current)
    );
    setNoApartmentsHeight(
      flashlistHeightRef.current -
        (hostHeaderHeightRef.current + filterHeaderHeightRef.current)
    );
  };

  const setFlashListHeight = (e: LayoutChangeEvent) => {
    const height = e.nativeEvent.layout.height;
    console.log("flashlist height : ", height);
    flashlistHeightRef.current = height;
  };

  const renderItem = useCallback(
    ({ item, index }: { item: apartmentDataTypes; index: number }) => {
      if (item.id === "header") {
        return (
          <ListingHeaderHostIcon getHostHeaderHeight={getHostHeaderHeight} />
        );
      } else if (item.id === "filter") {
        return (
          <ListingHeaderFilters
            apartmentsData={apartmentsData}
            getFilterHeaderHeight={getFilterHeaderHeight}
          />
        );
      } else if (item.id === "emptyData") {
        return <NoAparments noApartmentsHeight={noApartmentsHeight} />;
      } else {
        return <ApartmentsCard item={item} />;
      }
    },
    [noApartmentsHeight]
  );

  const keyExtractor = useCallback((item: apartmentDataTypes) => item.id, []);

  const goToHostForm = ()=> {
    navigation.navigate("HostOnboarding")
  }

  return (
    <View style={{ flex: 1 }}>
      <Pressable
      onPress={goToHostForm}
        style={{
          position: "absolute",
          top: "88%",
          left: WIDTH - 65,
          zIndex: 1,
          width: 50,
          height: 50,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.purpleLight,
        }}
      >
        <AntDesign name="plus" size={24} color="white" />
      </Pressable>
      <FlashList
        data={allAparmentsData}
        onLayout={setFlashListHeight}
        
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        stickyHeaderIndices={[1]}
      />
    </View>
  );
}
