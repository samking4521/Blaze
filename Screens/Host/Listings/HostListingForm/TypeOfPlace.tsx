import { Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../../Constants";
import { HostListingFormStyles } from "./HostListingFormStyles";
import { useNavigation } from "@react-navigation/native";
import { apartmentAmenities } from "../../../../assets/data/apartmentsAmenitiesData";
import { office_Business_Amenities } from "../../../../assets/data/officeBusinessAmenities";

type propertyCategoryType = "residential" | "commercial";
type placeCategoryTypes =
  | "apartment"
  | "hostel"
  | "office-space"
  | "business-space"
  | string;

type placeStructureType =
  | "single-room"
  | "room-parlour"
  | "self-contained"
  | "flat"
  | "duplex"
  | "penthouse"
  | "bungalow"
  | string;

const paginationTabs = [
  "TabOne",
  "TabTwo",
  "TabThree",
  "TabFour",
  "TabFive",
  "TabSix",
];

export const placeData = [
  {
    category: "Residential",
    types: [
      {
        label: "Apartment",
        value: "apartment",
        structure: [
          { label: "Single Room", value: "single-room" },
          { label: "Room and Parlour", value: "room-parlour" },
          { label: "Self-contained", value: "self-contained" },
          { label: "Flat", value: "flat" },
          { label: "Duplex", value: "duplex" },
          { label: "Penthouse", value: "penthouse" },
        ],
      },
      {
        label: "Hostel",
        value: "hostel",
        structure: [
          { label: "Single Room", value: "single-room" },
          { label: "Self-contained", value: "self-contained" },
        ],
      },
    ],
  },
  {
    category: "Commercial",
    types: [
      {
        label: "Office Space",
        value: "office-space",
        structure: [],
      },
      {
        label: "Shop/Business Space",
        value: "business-space",
        structure: [],
      },
    ],
  },
];

export default function TypeOfPlace() {
  const [category, setCategory] = useState<propertyCategoryType>("residential");
  const [placeType, setPlaceType] = useState<placeCategoryTypes>("apartment");
  const [placeStructure, setPlaceStructure] =
    useState<placeStructureType>("single-room");
  const [livingRoomCount, setLivingRoomCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [officeBussinessRoomCount, setOfficeBusinessRoomCount] = useState(1);
  const [restroomCount, setRestroomCount] = useState(0);
  const [restroomShared, setRestroomShared] = useState(false);
  const [kitchenCount, setKitchenCount] = useState(1);
  const [kitchenShared, setKitchenShared] = useState(false);
  const [bathroomShared, setBathroomShared] = useState(false);
  const [buildingType, setBuildingType] = useState<string | null>(null);
  const [buildingFloorCount, setBuildingFloorCount] = useState(1);
  const [apartmentFloorCount, setApartmentFloorCount] = useState(1);
  const navigation = useNavigation<any>()

  const updateLivingRoomCount = (order: string) => {
    if (order === "minus") {
      if (livingRoomCount === 1) {
        return;
      }
      setLivingRoomCount((prev) => prev - 1);
      return;
    }

    if (order === "plus") {
      if (
        placeStructure === "single-room" ||
        placeStructure === "room-parlour" ||
        placeStructure === "self-contained"
      ) {
        setLivingRoomCount(1);
        return;
      }
      setLivingRoomCount((prev) => prev + 1);
    }
  };

  const updateBedRoomCount = (order: string) => {
    if (order === "minus") {
      if (bedroomCount === 0 || bedroomCount === 1) {
        return;
      }

      setBedroomCount((prev) => prev - 1);
      return;
    }

    if (order === "plus") {
      if (
        placeStructure === "single-room" ||
        placeStructure === "self-contained" ||
        placeStructure === "room-parlour"
      ) {
        return;
      }
      setBedroomCount((prev) => prev + 1);
    }
  };

  const updateBathRoomCount = (order: string) => {
    if (order === "minus") {
      if (bathroomCount === 1) {
        return;
      }
      setBathroomCount((prev) => prev - 1);
      return;
    }
    if (order === "plus") {
      setBathroomCount((prev) => prev + 1);
    }
  };

  const updateKitchenCount = (order: string) => {
    if (order === "minus") {
      if (kitchenCount === 0) {
        return;
      }
      setKitchenCount((prev) => prev - 1);
      return;
    }
    if (order === "plus") {
      setKitchenCount((prev) => prev + 1);
    }
  };

  const updateBuildingFloorCount = (order: string) => {
    if (order === "minus") {
      if (buildingFloorCount === 1) {
        return;
      }
      setBuildingFloorCount((prev) => prev - 1);
      return;
    }
    if (order === "plus") {
      setBuildingFloorCount((prev) => prev + 1);
    }
  };

  const updateApartmentFloorCount = (order: string) => {
    if (order === "minus") {
      if (apartmentFloorCount === 1) {
        return;
      }
      setApartmentFloorCount((prev) => prev - 1);
      return;
    }
    if (order === "plus") {
      if (apartmentFloorCount === buildingFloorCount) {
        return;
      }
      setApartmentFloorCount((prev) => prev + 1);
    }
  };

  const setPlaceCategory = (categoryType: propertyCategoryType) => {
    if (categoryType === "residential") {
      setCategory(categoryType);
      setPlaceType("apartment");
      setPlaceStructure("single-room");
      return;
    }
    if (categoryType === "commercial") {
      setCategory(categoryType);
      setPlaceType("office-space");
      setPlaceStructure("private-office");
    }
  };

  const setPlacesType = (placeType: placeCategoryTypes) => {
    setPlaceType(placeType);
    if (placeType === "apartment") {
      setPlaceStructure("single-room");
      return;
    }
    if (placeType === "hostel") {
      setPlaceStructure("single-room");
      return;
    }

    if (placeType === "office-space") {
      setPlaceStructure("private-office");
      return;
    }
    if (placeType === "retail-space") {
      setPlaceStructure("shop");
      return;
    }
  };

  const updatePlaceStructure = (placeStructureValue: placeStructureType) => {
    if (
      placeStructureValue === "single-room" ||
      placeStructureValue === "room-parlour" ||
      placeStructureValue === "self-contained"
    ) {
      setPlaceStructure(placeStructureValue);
      setLivingRoomCount(1);
      if (
        placeStructureValue === "single-room" ||
        placeStructureValue === "self-contained"
      ) {
        setBedroomCount(0);
      }
      if (placeStructureValue === "room-parlour") {
        setBedroomCount(1);
      }
    } else {
      setPlaceStructure(placeStructureValue);
      if (livingRoomCount === 0 || bedroomCount === 0) {
        setLivingRoomCount(1);
        setBedroomCount(1);
      } else {
        setLivingRoomCount(livingRoomCount);
        setBedroomCount(bedroomCount);
      }
    }
  };

  const updateOfficeBusinessRoom = (order: string) => {
    if (order === "minus") {
      if (officeBussinessRoomCount === 1) {
        return;
      }
      setOfficeBusinessRoomCount((prev) => prev - 1);
      return;
    }
    if (order === "plus") {
      setOfficeBusinessRoomCount((prev) => prev + 1);
    }
  };

  const updateRestroomCount = (order: string) => {
    if (order === "minus") {
      if (restroomCount === 0) {
        return;
      }
      setRestroomCount((prev) => prev - 1);
      return;
    }
    if (order === "plus") {
      setRestroomCount((prev) => prev + 1);
    }
  };

  const goBackBtn = ()=> {
      navigation.goBack()
  }

  const goToAmenities = ()=> {
    if(category === "residential"){
         navigation.navigate("PlaceAmenities", {apartmentAmenities})
    }else{
       navigation.navigate("PlaceAmenities", {office_Business_Amenities})
    }
    
  }

  return (
    <SafeAreaView style={HostListingFormStyles.typeOfPlaceCont}>
      <View style={HostListingFormStyles.headerNavCont}>
        <Ionicons onPress={goBackBtn}  name="chevron-back" size={20} color={Colors.grayText} />
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
                    index + 1 <= 1
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
              What type of place{`\n`}are you renting out?
            </Text>
            <Text style={HostListingFormStyles.TOPHeaderDescText}>
              Choose the category that best fits your property
            </Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text style={HostListingFormStyles.TOPLabelText}>
              Place Category
            </Text>

            <View style={HostListingFormStyles.placeCategoryCont}>
              <Pressable
                onPress={() => setPlaceCategory("residential")}
                style={[
                  HostListingFormStyles.placeCategoryBtn,
                  {
                    backgroundColor:
                      category === "residential" ? Colors.white : undefined,
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize:
                      category === "residential" ? FONT_SIZE.lmd : FONT_SIZE.sm,
                    fontFamily:
                      category === "residential"
                        ? FONT_FAMILY.medium
                        : FONT_FAMILY.regular,
                    color: Colors.black,
                  }}
                >
                  Residential
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setPlaceCategory("commercial")}
                style={[
                  HostListingFormStyles.placeCategoryBtn,
                  {
                    backgroundColor:
                      category === "commercial" ? Colors.white : undefined,
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize:
                      category === "commercial" ? FONT_SIZE.lmd : FONT_SIZE.sm,
                    fontFamily:
                      category === "commercial"
                        ? FONT_FAMILY.medium
                        : FONT_FAMILY.regular,
                    color: Colors.black,
                  }}
                >
                  Commercial
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={HostListingFormStyles.TOPLabelText}>Place Type</Text>

            {category === "residential" && (
              <View style={HostListingFormStyles.placeTypeContainer}>
                {placeData[0].types.map((place_type, index) => (
                  <Pressable
                    onPress={() => setPlacesType(place_type.value)}
                    style={[
                      HostListingFormStyles.placeOptionPressableBtn,
                      {
                        borderWidth: placeType === place_type.value ? 0 : 2,
                        borderColor:
                          placeType === place_type.value
                            ? undefined
                            : Colors.grayBorder,
                        backgroundColor:
                          placeType === place_type.value
                            ? Colors.purpleLight
                            : undefined,
                      },
                    ]}
                    key={`placeType-${index}`}
                  >
                    <Text
                      style={{
                        fontSize:
                          placeType === place_type.value
                            ? FONT_SIZE.lmd
                            : FONT_SIZE.sm,
                        fontFamily:
                          placeType === place_type.value
                            ? FONT_FAMILY.medium
                            : FONT_FAMILY.regular,

                        color:
                          placeType === place_type.value
                            ? Colors.white
                            : Colors.black,
                      }}
                    >
                      {place_type.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}

            {category === "commercial" && (
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                {placeData[1].types.map((place_type, index) => (
                  <Pressable
                    onPress={() => setPlacesType(place_type.value)}
                    style={[
                      HostListingFormStyles.placeOptionPressableBtn,
                      {
                        borderWidth: placeType === place_type.value ? 0 : 2,
                        borderColor:
                          placeType === place_type.value
                            ? undefined
                            : Colors.grayBorder,
                        backgroundColor:
                          placeType === place_type.value
                            ? Colors.purpleLight
                            : undefined,
                      },
                    ]}
                    key={`placeType-${index}`}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize:
                          placeType === place_type.value
                            ? FONT_SIZE.lmd
                            : FONT_SIZE.sm,
                        fontFamily:
                          placeType === place_type.value
                            ? FONT_FAMILY.medium
                            : FONT_FAMILY.regular,

                        color:
                          placeType === place_type.value
                            ? Colors.white
                            : Colors.black,
                      }}
                    >
                      {place_type.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          {(placeType === "apartment" || placeType === "hostel") && (
            <View style={{ marginBottom: 20 }}>
              <Text style={HostListingFormStyles.TOPLabelText}>
                Place structure
              </Text>
              {placeType === "apartment" && (
                <View style={HostListingFormStyles.placeTypeContainer}>
                  {placeData[0].types[0].structure.map(
                    (place_structure, index) => (
                      <Pressable
                        onPress={() =>
                          updatePlaceStructure(place_structure.value)
                        }
                        style={[
                          HostListingFormStyles.placeOptionPressableBtn,
                          {
                            borderWidth:
                              placeStructure === place_structure.value ? 0 : 2,
                            borderColor:
                              placeStructure === place_structure.value
                                ? undefined
                                : Colors.grayBorder,
                            backgroundColor:
                              placeStructure === place_structure.value
                                ? Colors.purpleLight
                                : undefined,
                          },
                        ]}
                        key={`place_structure-${index}`}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize:
                              placeStructure === place_structure.value
                                ? FONT_SIZE.lmd
                                : FONT_SIZE.sm,
                            fontFamily:
                              placeStructure === place_structure.value
                                ? FONT_FAMILY.medium
                                : FONT_FAMILY.regular,

                            color:
                              placeStructure === place_structure.value
                                ? Colors.white
                                : Colors.black,
                          }}
                        >
                          {place_structure.label}
                        </Text>
                      </Pressable>
                    )
                  )}
                </View>
              )}

              {placeType === "hostel" && (
                <View style={HostListingFormStyles.placeTypeContainer}>
                  {placeData[0].types[1].structure.map(
                    (place_structure, index) => (
                      <Pressable
                        onPress={() => setPlaceStructure(place_structure.value)}
                        style={[
                          HostListingFormStyles.placeOptionPressableBtn,
                          {
                            borderWidth:
                              placeStructure === place_structure.value ? 0 : 2,
                            borderColor:
                              placeStructure === place_structure.value
                                ? undefined
                                : Colors.grayBorder,
                            backgroundColor:
                              placeStructure === place_structure.value
                                ? Colors.purpleLight
                                : undefined,
                          },
                        ]}
                        key={`place_structure-${index}`}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize:
                              placeStructure === place_structure.value
                                ? FONT_SIZE.lmd
                                : FONT_SIZE.sm,
                            fontFamily:
                              placeStructure === place_structure.value
                                ? FONT_FAMILY.medium
                                : FONT_FAMILY.regular,

                            color:
                              placeStructure === place_structure.value
                                ? Colors.white
                                : Colors.black,
                          }}
                        >
                          {place_structure.label}
                        </Text>
                      </Pressable>
                    )
                  )}
                </View>
              )}
            </View>
          )}

          <View style={{ marginBottom: 20 }}>
            <Text style={HostListingFormStyles.TOPLabelText}>No of rooms</Text>
            <View>
              {(placeType === "apartment" || placeType === "hostel") && (
                <View style={HostListingFormStyles.roomCountContainer}>
                  <Text style={HostListingFormStyles.TopTextStyle}>
                    Living room
                  </Text>
                  <View style={HostListingFormStyles.roomCounterCont}>
                    <Pressable
                      onPress={() => updateLivingRoomCount("minus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="minus" size={16} color="black" />
                    </Pressable>
                    <Text style={HostListingFormStyles.counterText}>
                      {livingRoomCount}
                    </Text>
                    <Pressable
                      onPress={() => updateLivingRoomCount("plus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="plus" size={16} color="black" />
                    </Pressable>
                  </View>
                </View>
              )}
              {(placeType === "office-space" ||
                placeType === "business-space") && (
                <View style={HostListingFormStyles.roomCountContainer}>
                  <Text style={HostListingFormStyles.TopTextStyle}>Rooms</Text>
                  <View style={HostListingFormStyles.roomCounterCont}>
                    <Pressable
                      onPress={() => updateOfficeBusinessRoom("minus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="minus" size={16} color="black" />
                    </Pressable>
                    <Text style={HostListingFormStyles.counterText}>
                      {officeBussinessRoomCount}
                    </Text>
                    <Pressable
                      onPress={() => updateOfficeBusinessRoom("plus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="plus" size={16} color="black" />
                    </Pressable>
                  </View>
                </View>
              )}
              {(placeType === "apartment" || placeType === "hostel") && (
                <View style={HostListingFormStyles.roomCountContainer}>
                  <Text style={HostListingFormStyles.TopTextStyle}>
                    Bedroom
                  </Text>
                  <View style={HostListingFormStyles.roomCounterCont}>
                    <Pressable
                      onPress={() => updateBedRoomCount("minus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="minus" size={16} color="black" />
                    </Pressable>
                    <Text style={HostListingFormStyles.counterText}>
                      {placeStructure === "single-room" ||
                      placeStructure === "self-contained"
                        ? 0
                        : placeStructure === "room-parlour"
                        ? 1
                        : bedroomCount}
                    </Text>
                    <Pressable
                      onPress={() => updateBedRoomCount("plus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="plus" size={16} color="black" />
                    </Pressable>
                  </View>
                </View>
              )}
              {(placeType === "apartment" || placeType === "hostel") && (
                <View style={HostListingFormStyles.roomCountContainer}>
                  <Text style={HostListingFormStyles.TopTextStyle}>
                    Bathroom
                  </Text>
                  {(placeStructure === "single-room" ||
                    placeStructure === "room-parlour") && (
                    <Pressable
                      onPress={() => setBathroomShared(!bathroomShared)}
                      style={HostListingFormStyles.isItSharedCont}
                    >
                      <Text style={HostListingFormStyles.isItSharedText}>
                        Is it shared?
                      </Text>
                      <Ionicons
                        name={
                          bathroomShared ? "checkbox-sharp" : "checkbox-outline"
                        }
                        size={28}
                        color={
                          bathroomShared
                            ? Colors.purpleLight
                            : Colors.grayBottomTab
                        }
                      />
                    </Pressable>
                  )}
                  <View style={HostListingFormStyles.roomCounterCont}>
                    <Pressable
                      onPress={() => updateBathRoomCount("minus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="minus" size={16} color="black" />
                    </Pressable>
                    <Text style={HostListingFormStyles.counterText}>
                      {bathroomCount}
                    </Text>
                    <Pressable
                      onPress={() => updateBathRoomCount("plus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="plus" size={16} color="black" />
                    </Pressable>
                  </View>
                </View>
              )}

              {(placeType === "office-space" ||
                placeType === "business-space") && (
                <View style={HostListingFormStyles.roomCountContainer}>
                  <Text style={HostListingFormStyles.TopTextStyle}>
                    Restroom
                  </Text>

                  <Pressable
                    onPress={() => setRestroomShared(!restroomShared)}
                    style={HostListingFormStyles.isItSharedCont}
                  >
                    <Text style={HostListingFormStyles.isItSharedText}>
                      Is it shared?
                    </Text>
                    <Ionicons
                      name={
                        restroomShared ? "checkbox-sharp" : "checkbox-outline"
                      }
                      size={28}
                      color={
                        restroomShared
                          ? Colors.purpleLight
                          : Colors.grayBottomTab
                      }
                    />
                  </Pressable>

                  <View style={HostListingFormStyles.roomCounterCont}>
                    <Pressable
                      onPress={() => updateRestroomCount("minus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="minus" size={16} color="black" />
                    </Pressable>
                    <Text style={HostListingFormStyles.counterText}>
                      {restroomCount}
                    </Text>
                    <Pressable
                      onPress={() => updateRestroomCount("plus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="plus" size={16} color="black" />
                    </Pressable>
                  </View>
                </View>
              )}
              {(placeType === "apartment" || placeType === "hostel") && (
                <View style={HostListingFormStyles.roomCountContainer}>
                  <Text style={HostListingFormStyles.TopTextStyle}>
                    Kitchen
                  </Text>
                  {(placeStructure === "single-room" ||
                    placeStructure === "room-parlour") && (
                    <Pressable
                      onPress={() => setKitchenShared(!kitchenShared)}
                      style={HostListingFormStyles.isItSharedCont}
                    >
                      <Text style={HostListingFormStyles.isItSharedText}>
                        Is it shared?
                      </Text>
                      <Ionicons
                        name={
                          kitchenShared ? "checkbox-sharp" : "checkbox-outline"
                        }
                        size={28}
                        color={
                          kitchenShared
                            ? Colors.purpleLight
                            : Colors.grayBottomTab
                        }
                      />
                    </Pressable>
                  )}
                  <View style={HostListingFormStyles.roomCounterCont}>
                    <Pressable
                      onPress={() => updateKitchenCount("minus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="minus" size={16} color="black" />
                    </Pressable>
                    <Text style={HostListingFormStyles.counterText}>
                      {kitchenCount}
                    </Text>
                    <Pressable
                      onPress={() => updateKitchenCount("plus")}
                      style={HostListingFormStyles.roomCounterBtn}
                    >
                      <AntDesign name="plus" size={16} color="black" />
                    </Pressable>
                  </View>
                </View>
              )}
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={HostListingFormStyles.TOPLabelText}>
              Building Type
            </Text>
            <Pressable
              onPress={() => setBuildingType("storey-building")}
              style={[
                HostListingFormStyles.buildingTypeCont,
                {
                  borderColor:
                    buildingType === "storey-building"
                      ? Colors.purpleLight
                      : Colors.grayBorder,
                },
              ]}
            >
              <Text style={HostListingFormStyles.TopTextStyle}>
                Storey Building
              </Text>
              <Ionicons
                name={
                  buildingType === "storey-building"
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                size={24}
                color="black"
              />
            </Pressable>
            <Pressable
              onPress={() => setBuildingType("bungalow")}
              style={[
                HostListingFormStyles.buildingTypeCont,
                {
                  borderColor:
                    buildingType === "bungalow"
                      ? Colors.purpleLight
                      : Colors.grayBorder,
                  marginTop: 10,
                },
              ]}
            >
              <Text style={HostListingFormStyles.TopTextStyle}>Bungalow</Text>
              <Ionicons
                name={
                  buildingType === "bungalow"
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                size={24}
                color="black"
              />
            </Pressable>
          </View>
          {buildingType === "storey-building" && (
            <View>
              <Text style={HostListingFormStyles.TOPLabelText}>
                No of floors
              </Text>
              <View style={HostListingFormStyles.floorCountContainer}>
                <Text style={HostListingFormStyles.TopTextStyle}>
                  Total floors in the building
                </Text>
                <View style={HostListingFormStyles.roomCounterCont}>
                  <Pressable
                    onPress={() => updateBuildingFloorCount("minus")}
                    style={HostListingFormStyles.roomCounterBtn}
                  >
                    <AntDesign name="minus" size={16} color="black" />
                  </Pressable>
                  <Text style={HostListingFormStyles.counterText}>
                    {buildingFloorCount}
                  </Text>
                  <Pressable
                    onPress={() => updateBuildingFloorCount("plus")}
                    style={HostListingFormStyles.roomCounterBtn}
                  >
                    <AntDesign name="plus" size={16} color="black" />
                  </Pressable>
                </View>
              </View>
              <View style={HostListingFormStyles.floorCountContainer}>
                <Text style={HostListingFormStyles.TopTextStyle}>
                  Apartment floor
                </Text>
                <View style={HostListingFormStyles.roomCounterCont}>
                  <Pressable
                    onPress={() => updateApartmentFloorCount("minus")}
                    style={HostListingFormStyles.roomCounterBtn}
                  >
                    <AntDesign name="minus" size={16} color="black" />
                  </Pressable>
                  <Text style={HostListingFormStyles.counterText}>
                    {apartmentFloorCount}
                  </Text>
                  <Pressable
                    onPress={() => updateApartmentFloorCount("plus")}
                    style={HostListingFormStyles.roomCounterBtn}
                  >
                    <AntDesign name="plus" size={16} color="black" />
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={HostListingFormStyles.getStartedBtnCont}>
          <Pressable onPress={goToAmenities} style={HostListingFormStyles.nextBtn}>
              <Text style={HostListingFormStyles.getStartedText}>Next</Text>
          </Pressable>
      </View>
    </SafeAreaView>
  );
}
