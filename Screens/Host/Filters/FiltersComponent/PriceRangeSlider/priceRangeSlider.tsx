import {
  Pressable,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import { RangeSlider } from "@react-native-assets/slider";
import { FontAwesome6, Entypo } from "@expo/vector-icons";
import { Colors } from "../../../../../Constants";
import PriceRangeGraph from "./priceRangeGraph";
import { PriceRangeStyles } from "./priceRangeStyles";

const MIN_VALUE = 1000;
const MAX_VALUE = 1000000;

const Thumb = () => {
  return (
    <View
      hitSlop={40}
      style={{
        width: 30,
        height: 30,
        backgroundColor: Colors.white,
        borderRadius: 20,
        ...Platform.select({
          ios: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
          },
          android: {
            elevation: 6,
          },
        }),
      }}
    />
  );
};

export default function PriceRangeSlider() {
  const [low, setLow] = useState(1000);
  const [high, setHigh] = useState(1000000);
  const [finalLow, setFinalLow] = useState(1000);
  const [finalHigh, setFinalHigh] = useState(1000000);
  const lowRef = useRef<TextInput>(null);
  const highRef = useRef<TextInput>(null);
  const [openTextInput, setOpenTextInput] = useState<string | null>(null);

  const changeHighValue = (text: string) => {
    const num = Number(text);
    setHigh(num);
    setFinalHigh(num);
  };

  const changeLowValue = (text: string) => {
    const num = Number(text);
    setLow(num);
    setFinalLow(num);
  };

  console.log("finallow, finalhigh: ", finalLow, finalHigh);

  const openMinTextInputBox = () => {
    lowRef.current?.focus();
  };

  const openMaxTextInputBox = () => {
    highRef.current?.focus();
  };

  return (
    <View>
      <PriceRangeGraph
        low={low}
        high={high}
        minValue={MIN_VALUE}
        maxValue={MAX_VALUE}
      />
      <RangeSlider
        style={{ marginTop: -10, paddingHorizontal: 15 }}
        range={[low, high]} // set the current slider's value
        step={1} // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
        minimumRange={MIN_VALUE} // Minimum range between the two thumbs (defaults as "step")
        minimumValue={MIN_VALUE} // Minimum value (defaults as 0)
        maximumValue={MAX_VALUE} // Maximum value (defaults as minimumValue + minimumRange)
        crossingAllowed={false} // If true, the user can make one thumb cross over the second thumb
        outboundColor="rgba(176, 176, 176, .3)" // The track color outside the current range value
        inboundColor={Colors.purpleLight} // The track color inside the current range value
        vertical={false} // If true, the slider will be drawn vertically
        enabled={true} // If false, the slider won't respond to touches anymore
        trackHeight={2} // The track's height in pixel
        thumbSize={20} // The thumb's size in pixel
        // slideOnTap={true} // If true, touching the slider will update it's value. No need to slide the thumb.
        onValueChange={(range: [number, number]) => {
          setLow(range[0]);
          setHigh(range[1]);
          return true;
        }} // Called each time the value changed. Return false to prevent the value from being updated. The type is (range: [number, number]) => boolean | void
        onSlidingStart={undefined} // Called when the slider is pressed. The type is (range: [number, number]) => void
        onSlidingComplete={(range: [number, number]) => {
          setFinalLow(range[0]);
          setFinalHigh(range[1]);
          return true;
        }} // Called when the press is released. The type is (range: [number, number]) => void
        CustomThumb={Thumb} // Provide your own component to render the thumb. The type is a component: ({ value: number, thumb: 'min' | 'max' }) => JSX.Element
      />

      <View style={PriceRangeStyles.priceTextContainer}>
        <View style={PriceRangeStyles.priceTextBox}>
          <Text style={PriceRangeStyles.priceTextLabel}>Min price</Text>
          <Pressable
            onPress={openMinTextInputBox}
            style={[
              PriceRangeStyles.priceTextInput,
              {
                borderColor:
                  openTextInput === "low" ? Colors.black : Colors.grayBorder,
              },
            ]}
          >
            <FontAwesome6 name="naira-sign" size={14} color={Colors.black} />
            <TextInput
              ref={lowRef}
              value={String(low)}
              onFocus={() => setOpenTextInput("low")}
              onBlur={() => setOpenTextInput(null)}
              onChangeText={changeLowValue}
              keyboardType="decimal-pad"
              style={PriceRangeStyles.priceTextInputText}
            />
          </Pressable>
        </View>
        <View style={PriceRangeStyles.priceTextBox}>
          <Text style={PriceRangeStyles.priceTextLabel}>Max price</Text>
          <Pressable
            onPress={openMaxTextInputBox}
            style={[
              PriceRangeStyles.priceTextInput,
              {
                borderColor:
                  openTextInput === "high" ? Colors.black : Colors.grayBorder,
              },
            ]}
          >
            <FontAwesome6 name="naira-sign" size={14} color={Colors.black} />
            <TextInput
              value={String(high)}
              onChangeText={changeHighValue}
              onFocus={() => setOpenTextInput("high")}
              onBlur={() => setOpenTextInput(null)}
              keyboardType="decimal-pad"
              style={PriceRangeStyles.priceTextInputText}
            />
            <Entypo name="plus" size={14} color={Colors.black} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

