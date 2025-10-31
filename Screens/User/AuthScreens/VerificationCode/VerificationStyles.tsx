import { StyleSheet } from "react-native";
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../../Constants";

export const VerificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    flex: 1,
  },
  goBackBtn: {
    width: 50,
    height: 50,
    backgroundColor: Colors.grayBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginRight: 10,
  },
  headerTextBox: {
    marginTop: 20,
  },
  headerText: {
    fontSize: FONT_SIZE.xl,
    fontFamily: FONT_FAMILY.bold,
    color: Colors.black,
    marginBottom: 10,
  },
  headerDescText: {
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.regular,
    color: Colors.grayText,
  },
  inputBoxesCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: "20%",
    marginBottom: "15%",
  },
  inputBox: {
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.medium,
    color: Colors.grayText,
    textAlign: "center",
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: Colors.grayBorder,
    borderRadius: 5,
  },
  actionBtn: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.purpleLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  verifyText: {
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.bold,
    color: Colors.white,
  },
  timerText: {
    textAlign: "center",
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.medium,
    color: Colors.grayText,
  },
  resendOtp: {
    textAlign: "center",
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.medium,
    marginTop: 20,
  },
  timer: {
     fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.medium,
    color: Colors.purpleLight
  }
});
