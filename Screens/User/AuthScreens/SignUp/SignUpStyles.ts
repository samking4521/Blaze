import { StyleSheet } from "react-native";
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../../Constants";

export const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerTextContainer: {
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: FONT_SIZE.xl,
    fontFamily: FONT_FAMILY.bold,
    color: Colors.black,
  },
  inputTextCont:{
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: Colors.grayBorder,
    borderRadius: 8,
    marginTop: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZE.sm,
  },
  termsText: {
    color: Colors.purpleLight,
    fontFamily: FONT_FAMILY.medium,
  },
  termsContainer: {
    fontSize: FONT_SIZE.sm,
    color: Colors.grayText,
    fontFamily: FONT_FAMILY.regular,
    marginBottom: 30,
  },
  actionButtonSignUp: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.purpleLight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  signUpText: {
    color: Colors.white,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZE.md,
  },
  divider: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  horizontal_line: {
    backgroundColor: Colors.grayBorder,
    width: "35%",
    height: 2,
  },
   orText: {
    color: Colors.grayText,
    marginHorizontal: 20,
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.regular,
  },
  backIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.grayBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginRight: 10,
  },
 
  customGoogleButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.grayBackground,
 
  },
  googleLogoImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  signUpWithGoogleText: {
    color: Colors.grayText,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZE.md,
  },
  goToSignIn: {
      marginTop: 20
  },
  goToSignInTextDesc: {
    textAlign: "center",
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.regular,
    color: Colors.grayText,
  },
  signInText: {
    color: Colors.purpleLight,
    fontFamily: FONT_FAMILY.medium,
  },
    errorText: {
    color: Colors.redError,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.xs,
    marginTop: 5,
  },
  passwordCheck: {
     color: Colors.grayText,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.xs,
    marginTop: 5,
    marginRight: 20
  }
});
