import {
  View,
  Modal,
  TextInput,
  Text,
  Keyboard,
} from "react-native";
import React from "react";
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../Constants";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";

export default function HostSearchInput({
  setOpenSearchModal,
}: {
  setOpenSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal
      visible={true}
      onRequestClose={() => setOpenSearchModal(false)}
      transparent={false}
      animationType="slide"
      presentationStyle="fullScreen"
      
    >
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.whiteBgColor,
          paddingTop: 40,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons
            onPress={() => {
              Keyboard.dismiss();
              setOpenSearchModal(false);
            }}
            name="chevron-back"
            size={30}
            color={Colors.grayText}
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              height: 40,
              borderRadius: 10,
              alignItems: "center",
              paddingHorizontal: 10,
              backgroundColor: Colors.grayBorder,
            }}
          >
            <Feather
              name="search"
              size={20}
              color={Colors.grayBottomTab}
              style={{ marginRight: 10 }}
            />
            <TextInput
              cursorColor={Colors.purpleLight}
              autoFocus
              style={{ flex: 1, height: 40, borderRadius: 20 }}
              placeholderTextColor={Colors.grayBottomTab}
              placeholder="Search listing name or location"
            />
         
          </View>
          <Text
            style={{
              fontSize: FONT_SIZE.sm,
              fontFamily: FONT_FAMILY.medium,
              color: Colors.purpleLight,
            }}
          >
            Search
          </Text>
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 10}}>
          <Text style={{
             fontSize: FONT_SIZE.md,
                  fontFamily: FONT_FAMILY.medium,
                  color: Colors.black,
                  marginBottom: 10
          }}>Search Tips</Text>
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: Colors.white,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
               <Entypo
                name="home"
                size={20}
                color={Colors.grayBottomTab}
              />
              <Text
                style={{
                  fontSize: FONT_SIZE.sm,
                  fontFamily: FONT_FAMILY.medium,
                  color: Colors.black,
                }}
              >
                3 bedroom flat
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Entypo
                name="home"
                size={20}
                color={Colors.grayBottomTab}
              />

              <Text
                style={{
                  fontSize: FONT_SIZE.sm,
                  fontFamily: FONT_FAMILY.medium,
                  color: Colors.black,
                  marginVertical: 10,
                }}
              >
                Room self-contain
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Entypo
                name="home"
                size={20}
                color={Colors.grayBottomTab}
              />

              <Text
                style={{
                  fontSize: FONT_SIZE.sm,
                  fontFamily: FONT_FAMILY.medium,
                  color: Colors.black,
                }}
              >
                Cozy studio
              </Text>
            </View>
             <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Entypo
                name="location-pin"
                size={20}
                 color={Colors.redError}
              />

              <Text
                style={{
                  fontSize: FONT_SIZE.sm,
                  fontFamily: FONT_FAMILY.medium,
                  color: Colors.black,
                  marginVertical: 10,
                }}
              >
                 Abule-Egba, Lagos
              </Text>
            </View>
              <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Entypo
                name="location-pin"
                size={20}
                color={Colors.redError}
              />

              <Text
                style={{
                  fontSize: FONT_SIZE.sm,
                  fontFamily: FONT_FAMILY.medium,
                  color: Colors.black,
                
                }}
              >
                 Iworoko, Ekiti
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
