import { View } from "react-native";
import React, { memo, useRef } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import LocationSearch from "./location";
import { Colors } from "../../../../../Constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SearchLocationStyles } from "./searchLocationStyles";

type LocationProps = {
  setOpenLocationBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  openLocationBottomSheet: boolean;
};

const snapPoints = ["100%"];

function LocationBottomSheet({
  setOpenLocationBottomSheet,
  openLocationBottomSheet,
}: LocationProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const closeBottomSheet = () => {
    setOpenLocationBottomSheet(false);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      keyboardBehavior="interactive"
      enableDynamicSizing={false}
      enablePanDownToClose
      onClose={closeBottomSheet}
      containerStyle={{
        backgroundColor: openLocationBottomSheet
          ? Colors.blackTransparent
          : undefined,
      }}
      handleIndicatorStyle={SearchLocationStyles.handleIndicator}
    >
      <BottomSheetView style={SearchLocationStyles.bottomSheetContainer}>
        <View style={SearchLocationStyles.textInputContainer}>
          <View style={SearchLocationStyles.textInputBox}>
            <Feather
              name="search"
              size={22}
              color={Colors.grayBottomTab}
              style={{ marginLeft: 5 }}
            />
            <BottomSheetTextInput
              keyboardType="default"
              style={SearchLocationStyles.bottomSheetTextInput}
              placeholder="Enter city, state or landmark"
              placeholderTextColor={Colors.gray}
            />
            <Ionicons
              name="close-circle"
              size={22}
              style={{ marginHorizontal: 10 }}
              color={Colors.grayBottomTab}
            />
          </View>
        </View>
        <LocationSearch />
      </BottomSheetView>
    </BottomSheet>
  );
}

export default memo(LocationBottomSheet);

