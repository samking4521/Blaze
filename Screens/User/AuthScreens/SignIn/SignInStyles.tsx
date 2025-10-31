import { StyleSheet } from "react-native"
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../../Constants"

export const SignInStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    body: {
        flex: 1
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
    headerText: {
        fontSize: 28,
        fontFamily: FONT_FAMILY.bold,
        color: Colors.black,
        marginTop: 20,
        marginBottom: 10

    },
    headerDescText: {
        color: Colors.grayText,
        fontSize: FONT_SIZE.sm,
        fontFamily: FONT_FAMILY.regular
    },
    textInputBoxes: {
        marginTop: 30
    },
    textInputBox: {
         flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: Colors.grayBorder,
    borderRadius: 8,
    marginTop: 10,
    },
    textInput: {
         flex: 1,
         padding: 10,
    },
    passwordCont: {
        marginTop: 20
    },
    label: {
        fontSize: FONT_SIZE.sm,
        color: Colors.black,
        fontFamily: FONT_FAMILY.medium
    },
    signedIn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 25
    },
    actionButton:{
        backgroundColor: Colors.purpleLight,
        width: "100%",
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40

    },
    actionButtonText: {
        color: Colors.white,
        fontFamily: FONT_FAMILY.bold,
        fontSize: FONT_SIZE.md
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
  customGoogleSignIn: {
    flexDirection: "row",
    alignItems: "center",
        backgroundColor: Colors.grayBorder,
        width: "100%",
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
       
    },
  customGoogleSignInText: {
       color: Colors.grayText,
        fontFamily: FONT_FAMILY.medium,
        fontSize: FONT_SIZE.md
  },
  googleImg: {
     width: 24,
    height: 24,
    marginRight: 10,
  },
 createAccText: {
        color: Colors.purpleLight,
        fontFamily: FONT_FAMILY.medium,
        fontSize: FONT_SIZE.md,
        textAlign: "center"
},
passwordLabelCont:{
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between"
},
forgotPwd: {
     color: Colors.purpleLight,
        fontFamily: FONT_FAMILY.medium,
        fontSize: FONT_SIZE.xs
},
errorText: {
    color: Colors.redError,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.xs,
    marginTop: 5,
}


})