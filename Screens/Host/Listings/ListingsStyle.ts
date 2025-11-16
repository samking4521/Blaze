import { StyleSheet, Platform, Dimensions } from "react-native";
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../Constants";

const WIDTH = Dimensions.get("window").width;
const CAROUSEL_WIDTH = WIDTH - 50;
const ASPECT_RATIO = 4 / 3.5; // width / height
const CAROUSEL_HEIGHT = CAROUSEL_WIDTH / ASPECT_RATIO;

export const ListingsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteBgColor,
  },
  body: {
    flex: 1,
  },
  hostStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  hostStatusImg: {
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.purpleLight,
  },
  hostNameLabel: {
    color: Colors.white,
    fontSize: FONT_SIZE.lg,
    fontFamily: FONT_FAMILY.bold,
  },
  getVerifiedContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "rgba(143, 56, 254, 0.2)",
    marginTop: 2,
    borderRadius: 15,
  },
  hostName: {
    fontSize: FONT_SIZE.lmd,
    color: Colors.black,
    fontFamily: FONT_FAMILY.medium,
  },
  getVerifiedText: {
    fontSize: FONT_SIZE.xs,
    color: Colors.black,
    fontFamily: FONT_FAMILY.medium,
    paddingRight: 5,
  },
  headerViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: Colors.grayBackground,
    justifyContent: "center",
    alignItems: "center",
    // ...Platform.select({
    //   ios: {
    //     shadowColor: Colors.black,
    //     shadowOpacity: 0.2,
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowRadius: 3,
    //   },
    //   android: {
    //     elevation: 4,
    //   },
    // }),
  },
  redDotIcon: {
    position: "absolute",
    top: 10,
    left: 20,
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 10,
  },
  headerText: {
    fontSize: FONT_SIZE.lg,
    color: Colors.black,
    fontFamily: FONT_FAMILY.bold,
  },
  headerTextCont: {
    marginVertical: 20,
  },
  listingTypeCategoryFilterCont: {
    borderColor: Colors.gray,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
  },
  searchListingsBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 15,
  },
  searchTextInputBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.white,
    height: 50,
    borderRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  textInput: {
    backgroundColor: Colors.white,
    flex: 1,
    height: 50,
    borderRadius: 30,
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.medium,
  },
  filterContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.white,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  apartmentCardContainer: {
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  apartmentCardDetailsCont: {
    marginTop: 10,
  },
  apartmentCardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  apartmentTitle: {
    fontSize: FONT_SIZE.md,
    textAlign: "left",
    fontFamily: FONT_FAMILY.medium,
    color: Colors.black,
    maxWidth: WIDTH / 2,
  },
  makeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  apartmentPrice: {
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.medium,
    color: Colors.black,
  },
  apartmentLocation: {
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.regular,
    color: Colors.grayText,
    marginTop: 4,
  },
  metricsText: {
    color: Colors.grayText,
    fontSize: FONT_SIZE.xsl,
    fontFamily: FONT_FAMILY.regular,
  },
  metricsIcon: {
    marginRight: 3,
  },
  dotsCarousel: {
    position: "absolute",
    top: (85 / 100) * CAROUSEL_HEIGHT,
    left: (30 / 100) * CAROUSEL_WIDTH,
  },
  apartmentImages: {
    width: CAROUSEL_WIDTH,
    height: CAROUSEL_HEIGHT,
  },
  noApartmentsContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  homeIcon: {
    alignSelf: "center",
  },
  noApartmentsLabelText: {
    textAlign: "center",
    fontSize: FONT_SIZE.xmd,
    fontFamily: FONT_FAMILY.medium,
    color: Colors.black,
  },
  noApartmentsDescText: {
    textAlign: "center",
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.medium,
    color: Colors.grayText,
  }
});
