import { StyleSheet } from "react-native";
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../../../Constants";

export const SearchLocationStyles = StyleSheet.create({
  mapViewStyle: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.medium,
    marginTop: 5,
    color: Colors.black,
  },
  bottomSheetContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  handleIndicator: {
    width: 100,
    backgroundColor: Colors.grayBottomTab,
  },
  textInputContainer: {
    paddingHorizontal: 15,
    width: "100%",
    position: "absolute",
    top: 20,
    zIndex: 1,
  },
  textInputBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    width: "100%",
    height: 40,
    borderRadius: 30,
    backgroundColor: "white",
  },
  bottomSheetTextInput: {
    flex: 1,
    height: 40,
    borderRadius: 30,
    fontSize: FONT_SIZE.lmd,
    fontFamily: FONT_FAMILY.medium,
  },
});
