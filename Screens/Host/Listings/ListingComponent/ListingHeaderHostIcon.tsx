import { LayoutChangeEvent, Pressable, Text, View } from 'react-native'
import { ListingsStyle } from '../ListingsStyle'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { Colors } from '../../../../Constants';
import { useNavigation } from '@react-navigation/native';

export default function ListingHeaderHostIcon({getHostHeaderHeight}: {getHostHeaderHeight: (height: number)=> void}) {
  
    const name = "Samuel";
    const navigation = useNavigation<any>()


   
    const setHostHeaderHeight = (e: LayoutChangeEvent)=>{
      const height = e.nativeEvent.layout.height
       console.log("height: ", height )
        getHostHeaderHeight(height)
    }

    const goToMaps = ()=> {
         navigation.navigate("Map")
    }

  return (
    <View style={{paddingHorizontal: 15}} onLayout={setHostHeaderHeight}>
        <View style={ListingsStyle.headerViewContainer}>
          <View style={ListingsStyle.hostStatusContainer}>
            <View style={ListingsStyle.hostStatusImg}>
              <Text style={ListingsStyle.hostNameLabel}>
                {name[0].toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={ListingsStyle.hostName}>Hi, {name}</Text>
              <View style={ListingsStyle.getVerifiedContainer}>
                <LinearGradient
                  colors={["#E0E0E0", "#B8B8B8", "#A0A0A0"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    borderRadius: 10,
                    padding: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons
                    name="shield-checkmark"
                    size={16}
                    color={Colors.white}
                  />
                </LinearGradient>
                <Text style={ListingsStyle.getVerifiedText}>Get Verified</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: "row", alignItems:"center", gap: 5, backgroundColor: "white", padding: 5, borderRadius: 30}}>
            <Pressable onPress={goToMaps} style={ListingsStyle.notificationContainer}>
                <Entypo name="map" size={20} color={Colors.grayText} />
            </Pressable>
            <View style={ListingsStyle.notificationContainer}>
              <Feather name="bell" size={20} color={Colors.grayText} />
              <View style={ListingsStyle.redDotIcon} />
            </View>
          </View>
        </View>

        <View style={ListingsStyle.headerTextCont}>
          <Text style={ListingsStyle.headerText}>Your Listings</Text>
        </View>
      </View>
  )
}

