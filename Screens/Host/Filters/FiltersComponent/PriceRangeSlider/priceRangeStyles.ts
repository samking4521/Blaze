import { StyleSheet } from "react-native";
import { FONT_SIZE, FONT_FAMILY, Colors } from "../../../../../Constants";

export const PriceRangeStyles = StyleSheet.create({
  graphContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  priceTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  priceTextBox: {
    alignItems: "center",
    gap: 5,
  },
  priceTextLabel: {
    fontSize: FONT_SIZE.xs,
    fontFamily: FONT_FAMILY.medium,
    color: Colors.grayText,
  },
  priceTextInput: {
    padding: 15,
    borderWidth: 2,
    borderColor: Colors.grayBorder,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  priceTextInputText: {
    fontSize: FONT_SIZE.sm,
    maxWidth: 100,
    color: Colors.black,
  },
});
