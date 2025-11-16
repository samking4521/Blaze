import { View, Dimensions } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../../../../Constants";
import { PriceRangeStyles } from "./priceRangeStyles";

const WIDTH = Dimensions.get("window").width;
const ACTUAL_WIDTH = WIDTH - 30;
const VIEW_WIDTH = ACTUAL_WIDTH / 31;
const arrayMap = [
  { height: 0, width: VIEW_WIDTH * 1 },
  { height: 0, width: VIEW_WIDTH * 2 },
  { height: 30, width: VIEW_WIDTH * 3 },
  { height: 50, width: VIEW_WIDTH * 4 },
  { height: 45, width: VIEW_WIDTH * 5 },
  { height: 70, width: VIEW_WIDTH * 6 },
  { height: 65, width: VIEW_WIDTH * 7 },
  { height: 70, width: VIEW_WIDTH * 8 },
  { height: 85, width: VIEW_WIDTH * 9 },
  { height: 90, width: VIEW_WIDTH * 10 },
  { height: 60, width: VIEW_WIDTH * 11 },
  { height: 40, width: VIEW_WIDTH * 12 },
  { height: 70, width: VIEW_WIDTH * 13 },
  { height: 85, width: VIEW_WIDTH * 14 },
  { height: 55, width: VIEW_WIDTH * 15 },
  { height: 100, width: VIEW_WIDTH * 16 },
  { height: 70, width: VIEW_WIDTH * 17 },
  { height: 65, width: VIEW_WIDTH * 18 },
  { height: 50, width: VIEW_WIDTH * 19 },
  { height: 65, width: VIEW_WIDTH * 20 },
  { height: 100, width: VIEW_WIDTH * 21 },
  { height: 85, width: VIEW_WIDTH * 22 },
  { height: 55, width: VIEW_WIDTH * 23 },
  { height: 40, width: VIEW_WIDTH * 24 },
  { height: 30, width: VIEW_WIDTH * 25 },
  { height: 45, width: VIEW_WIDTH * 26 },
  { height: 65, width: VIEW_WIDTH * 27 },
  { height: 100, width: VIEW_WIDTH * 28 },
  { height: 95, width: VIEW_WIDTH * 29 },
  { height: 0, width: VIEW_WIDTH * 30 },
  { height: 0, width: VIEW_WIDTH * 31 },
];

type minMaxRange = {
  low: number;
  high: number;
  minValue: number;
  maxValue: number;
};

const PriceRangeGraph = ({ low, high, minValue, maxValue }: minMaxRange) => {
  function mapRangeToValue(
    [low, high]: number[],
    [minValue, maxValue]: number[],
    [VIEW_WIDTH, VIEW_WIDTH_MAX]: number[]
  ) {
    const map = (x: number) =>
      VIEW_WIDTH +
      ((x - minValue) * (VIEW_WIDTH_MAX - VIEW_WIDTH)) / (maxValue - minValue);
    return [map(low), map(high)];
  }

  const result = mapRangeToValue(
    [low, high],
    [minValue, maxValue],
    [VIEW_WIDTH, VIEW_WIDTH * 31]
  );

  return (
    <View style={PriceRangeStyles.graphContainer}>
      {arrayMap.map((i, index) => {
        return (
          <View
            key={`view-${index}`}
            style={{
              width: VIEW_WIDTH,
              height: i.height,
              backgroundColor:
                i.width >= result[0] && i.width <= result[1]
                  ? Colors.purpleLight
                  : "rgba(176, 176, 176, .3)",
              borderRightWidth: 2,
              borderRightColor: Colors.whiteBgColor,
            }}
          />
        );
      })}
    </View>
  );
};

export default memo(PriceRangeGraph);


