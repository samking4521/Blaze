import { StyleSheet } from "react-native";
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../../Constants";

export const ForgotPasswordStyles = StyleSheet.create({
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
  headerTextDesc: {
     fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.medium,
    color: Colors.grayText,
    marginTop: 10
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
  backIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.grayBackground,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginRight: 10,
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
  },
   createAccText:{
             color: Colors.purpleLight,
            fontSize: FONT_SIZE.md,
            fontFamily: FONT_FAMILY.medium,
            textAlign: "center"
        }
});
