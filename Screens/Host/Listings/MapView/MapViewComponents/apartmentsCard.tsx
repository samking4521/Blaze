import {
  AntDesign,
  Feather,
  FontAwesome6,
  
} from "@expo/vector-icons";
import { Colors } from "../../../../../Constants";
import { Pressable, Text, View } from "react-native";
import MapListings from "../mapListings";
import Animated, { FadeInDown } from "react-native-reanimated";
import { apartmentDataTypes } from "../../ListingComponent/listingTypes";
import { MapViewStyles } from "../MapViewStyles";
import { memo } from "react";


type showListingsType = {
    showListing: apartmentDataTypes,
    setShowListing: React.Dispatch<React.SetStateAction<apartmentDataTypes | null>>
}

function ApartmentsMapViewCard({showListing, setShowListing}: showListingsType) {
    function formatNumber(value: number): string {
        if (value < 1000) {
          return `${value}`;
        }
        if (value < 1_000_000) {
          const num = value / 1000;
          // Show 1 decimal for numbers under 100K (e.g., 12.5K), otherwise no decimals (e.g., 120K)
          return num < 100 ? `${num.toFixed(1)}K` : `${num.toFixed(0)}K`;
        }
        if (value < 1_000_000_000) {
          const num = value / 1_000_000;
          return num < 100 ? `${num.toFixed(1)}M` : `${num.toFixed(0)}M`;
        }
        const num = value / 1_000_000_000;
        return num < 100 ? `${num.toFixed(1)}B` : `${num.toFixed(0)}B`;
      }
  return (
      <Animated.View
        key={`listing-${showListing.id}`}
        entering={FadeInDown.duration(500)}
          style={MapViewStyles.apartmentsMapViewCardBox}
        >
          <View style={MapViewStyles.floatingHeaderCont}>
              <View style={[ MapViewStyles.floatingHeaderLabelCont, {  backgroundColor: showListing.availability.status === "LIVE"? Colors.purpleLight: showListing.availability.status === "PENDING"? Colors.grayBottomTab : "tomato"}]}>
                 <Text style={MapViewStyles.floatingHeaderLabelText}>{showListing.availability.status === "LIVE"? "LIVE": showListing.availability.status === "PENDING"? "PENDING" : "RENTED"}</Text>
              </View>
              <Pressable onPress={()=> setShowListing(null)} style={MapViewStyles.closeAptMapCard}>
                 <AntDesign name="close" size={14} color="black" />
              </Pressable>
          </View>
          <MapListings images={showListing.images} />
          <View style={{ padding: 10 }}>
            <View
              style={MapViewStyles.apartmentMapCardTitleCont}
            >
              <Text
                style={MapViewStyles.apartmentTitle}
              >
                {showListing.title}
              </Text>
              <View style={MapViewStyles.makeRow}>
                <FontAwesome6
                  name="naira-sign"
                  size={14}
                  color={Colors.black}
                  style={{ marginRight: 1 }}
                />
                <Text
                  style={MapViewStyles.apartmentPrice}
                >
                  {formatNumber(showListing.rental.price)}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={MapViewStyles.apartmentLocation}
              >
                {showListing.location.city} {"\u2022"}{" "}
                {showListing.location.state}
              </Text>
            </View>
            <View>
              <Text
                style={MapViewStyles.apartmentLocation}
              >
                10d ago
              </Text>
            </View>

            <View
              style={[
                MapViewStyles.makeRow,
                { gap: 8 },
              ]}
            >
              <View style={MapViewStyles.makeRow}>
                <Feather
                  name="eye"
                  size={12}
                  color={Colors.grayText}
                  style={{
                    marginRight: 3,
                  }}
                />
                <Text
                  style={MapViewStyles.metricsText}
                >
                  {formatNumber(2000)}
                </Text>
              </View>
              <View style={MapViewStyles.makeRow}>
                <Feather
                  name="bookmark"
                  size={12}
                  color={Colors.grayText}
                  style={{ marginRight: 3 }}
                />
                <Text
                  style={MapViewStyles.metricsText}
                >
                  {formatNumber(100)}
                </Text>
              </View>
              <View style={MapViewStyles.makeRow}>
                <Feather
                  name="share"
                  size={12}
                  color={Colors.grayText}
                  style={{ marginRight: 3 }}
                />
                <Text
                  style={MapViewStyles.metricsText}
                >
                  {formatNumber(20)}
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>
  )
}

export default memo(ApartmentsMapViewCard)