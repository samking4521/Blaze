import { StyleSheet } from "react-native"
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../../Constants"

export const OnBoardingStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.purpleDeep
    },
   
    paginationSlidesContainer: {
      flexDirection: "row", 
      justifyContent: "center", 
      alignItems: "center", 
      gap: 10, 
      marginVertical: 10
    },
    paginationSlides: {
     height: 5, 
     borderRadius: 3
    },
    actionButtons: {
      alignItems: "center",
       marginTop: 20
    },
    getStartedButton: {
      width: "80%", 
      height: 50, 
      backgroundColor: Colors.purpleLight, 
      justifyContent: "center", 
      alignItems: "center", 
      borderRadius: 30
    },
    getStartedText: {
      color: Colors.white, 
      fontFamily: FONT_FAMILY.bold,
      fontSize: FONT_SIZE.md
    },
    signInContainer: {
      flexDirection: "row", 
      justifyContent: "center", 
      marginTop: 10, 
      gap: 5
      },
      signInDesc: {
        color: Colors.white,  
        fontSize: FONT_SIZE.sm, 
        fontFamily: FONT_FAMILY.regular,
        opacity: 0.9
      },
      signInText: {
        color: Colors.purpleLight, 
        fontWeight: "600", 
        fontSize: FONT_SIZE.sm, 
        fontFamily: FONT_FAMILY.regular,
      },
    title: {
      marginTop: 10,
      textAlign: "center",
      color: Colors.white,
    fontFamily: FONT_FAMILY.bold,
      fontSize: FONT_SIZE.xl,
    
      
    },
     description: {
      marginTop: 10,
      color: "rgba(255,255,255,0.9)",
      textAlign: "center",
      fontFamily: FONT_FAMILY.regular,
      fontSize: FONT_SIZE.md
    },
})   