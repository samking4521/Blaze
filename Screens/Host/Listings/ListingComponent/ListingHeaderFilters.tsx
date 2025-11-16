import { Pressable, Text, TextInput, View, StyleSheet, LayoutChangeEvent } from "react-native";
import { Colors, FONT_FAMILY, FONT_SIZE } from "../../../../Constants";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { ListingsStyle } from "../ListingsStyle";
import { apartmentDataTypes } from "./listingTypes";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import HostSearchInput from "../../../../Components/HostSearchBox/hostSearchInput";

type apartmentType = {
  apartmentsData: apartmentDataTypes[],
  getFilterHeaderHeight: (height: number) => void
}

export default function ListingHeaderFilters({apartmentsData, getFilterHeaderHeight}: apartmentType) {
  const navigation = useNavigation<any>()
      const [openSearchModal, setOpenSearchModal] = useState(false)


  const openFilterScreen = ()=>{
       navigation.navigate("Filters")
  }

  

  const setFilterHeaderHeight = (e: LayoutChangeEvent)=> {
   
      const height = e.nativeEvent.layout.height
       console.log("filter : ", height)
      getFilterHeaderHeight(height)
  }

  return (
    <View style={styles.stickyContainer} onLayout={setFilterHeaderHeight}>
<View >
      <View style={ListingsStyle.searchListingsBox}>
        <Pressable pointerEvents="box-only" onPress={()=> setOpenSearchModal(true)} style={ListingsStyle.searchTextInputBox}>
          <Feather
            name="search"
            size={22}
            color={Colors.grayBottomTab}
            style={{ marginLeft: 20 }}
          />
          <TextInput
            editable={false}
            
            placeholder="Search by name or location"
            style={ListingsStyle.textInput}
            placeholderTextColor={Colors.grayPlaceholder}
          />
        </Pressable>

        <Pressable onPress={openFilterScreen} style={ListingsStyle.filterContainer}>
          <MaterialCommunityIcons
            name="tune-vertical"
            size={24}
            color={Colors.grayBottomTab}
          />
        </Pressable>
      </View>
      <Text style={{textAlign: "center", fontSize: FONT_SIZE.xsl, marginVertical: 5, fontFamily: FONT_FAMILY.medium}}>{apartmentsData.length} places</Text>
    </View>
   { openSearchModal && <HostSearchInput setOpenSearchModal={setOpenSearchModal}/>}
    </View>
    
  );
}

const styles = StyleSheet.create({
  stickyContainer: {
    backgroundColor: Colors.whiteBgColor, // YOUR COLOR
   
  },
});