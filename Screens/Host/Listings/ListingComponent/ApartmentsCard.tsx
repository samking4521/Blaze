import { View, Text } from "react-native";
import React, { memo } from "react";
import { apartmentDataTypes } from "./listingTypes";
import { Colors } from "../../../../Constants";
import ApartmentsImageCarousel from "./ApartmentsImageCarousel";
import { FontAwesome6, Feather } from "@expo/vector-icons";
import { ListingsStyle } from "../ListingsStyle";

type apartmentCardTypes = {
  item: apartmentDataTypes;
};

const ApartmentsCard = ({ item }: apartmentCardTypes) => {
  
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
    <View style={ListingsStyle.apartmentCardContainer}>
      <ApartmentsImageCarousel images={item.images} />
      <View style={ListingsStyle.apartmentCardDetailsCont}>
        <View style={ListingsStyle.apartmentCardTitleRow}>
          <Text style={ListingsStyle.apartmentTitle}>{item.title}</Text>
          <View style={ListingsStyle.makeRow}>
            <FontAwesome6
              name="naira-sign"
              size={14}
              color={Colors.black}
              style={{ marginRight: 1 }}
            />
            <Text style={ListingsStyle.apartmentPrice}>
              {formatNumber(item.rental.price)} 
            </Text>
          </View>
        </View>
        <View>
          <Text style={ListingsStyle.apartmentLocation}>
            {item.location.city} {"\u2022"} {item.location.state}
          </Text>

          
        </View>
        <View>
          <Text style={ListingsStyle.apartmentLocation}>10d ago</Text>
        </View>

        <View style={[ListingsStyle.makeRow, { gap: 8 }]}>
            <View style={ListingsStyle.makeRow}>
              <Feather
                name="eye"
                size={14}
                color={Colors.grayText}
                style={ListingsStyle.metricsIcon}
              />
              <Text style={ListingsStyle.metricsText}>
                {formatNumber(2000)}
              </Text>
            </View>
            <View style={ListingsStyle.makeRow}>
              <Feather
                name="bookmark"
                size={14}
                color={Colors.grayText}
                style={ListingsStyle.metricsIcon}
              />
              <Text style={ListingsStyle.metricsText}>{formatNumber(100)}</Text>
            </View>
            <View style={ListingsStyle.makeRow}>
              <Feather
                name="share"
                size={14}
                color={Colors.grayText}
                style={ListingsStyle.metricsIcon}
              />
              <Text style={ListingsStyle.metricsText}>{formatNumber(20)}</Text>
            </View>
          </View>

      </View>
    </View>
  );
};

export default memo(
  ApartmentsCard,
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id
);
