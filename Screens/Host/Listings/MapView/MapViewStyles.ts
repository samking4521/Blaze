import { StyleSheet, Dimensions } from "react-native"
import { Colors, FONT_SIZE, FONT_FAMILY } from "../../../../Constants"

const {width, height} = Dimensions.get("window")
const WIDTH = width
const HEIGHT = height



export const MapViewStyles = StyleSheet.create({
    
    goBackIcon: {
          width: 45,
                  height: 45,
                  borderRadius: 45,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.blackTransparent,
                  position: "absolute",
                 
                  left: 15,
                  zIndex: 1,
    },
    mapView: {
         width: "100%", 
         height: "100%" 
    },
    apartmentsMarker: {
         width: 30,
                        height: 30,
                        borderRadius: 30,
                        borderWidth: 2,
                        borderColor: Colors.white,
                        justifyContent: "center",
                        alignItems: "center",
    },
    apartmentsMapViewCardBox: {
          backgroundColor: Colors.whiteBgColor,
                    borderRadius: 15,
                    position: "absolute",
                    top: (60 / 100) * HEIGHT,
                    left: 15,
    },
    floatingHeaderCont: {
        width: "100%", paddingHorizontal: 10,  position:"absolute", top: 10, zIndex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between"
    },
    floatingHeaderLabelCont: {
        alignSelf: "flex-start", justifyContent: "center", alignItems: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5,
    },
    floatingHeaderLabelText: {
        fontSize: FONT_SIZE.xsl, fontFamily: FONT_FAMILY.bold, color: Colors.white
    },
     closeAptMapCard: {
    width: 30, height: 30, justifyContent: "center", alignItems: "center", backgroundColor: Colors.white, borderRadius: 30
  },
  apartmentMapCardTitleCont: {
    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
  },
  apartmentTitle: {
     fontSize: FONT_SIZE.sm,
                  fontFamily: FONT_FAMILY.medium,
                  color: Colors.black,
                  width: WIDTH / 2
  },
  makeRow: {
    flexDirection: "row", alignItems: "center"
  },
  apartmentPrice: {
     fontSize: FONT_SIZE.sm,
                    fontFamily: FONT_FAMILY.medium,
                    color: Colors.black,
  },
  apartmentLocation: {
     fontSize: FONT_SIZE.xsl,
                  fontFamily: FONT_FAMILY.regular,
                  color: Colors.grayText,
                  marginTop: 4,
  },
  metricsText: {
     color: Colors.grayText,
                    fontSize: FONT_SIZE.xsl,
                    fontFamily: FONT_FAMILY.regular,
  }
})