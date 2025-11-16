import { useState, useRef } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { apartmentsData } from "../../../../assets/data/apartmentsData";
import {
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors, } from "../../../../Constants";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { apartmentDataTypes } from "../ListingComponent/listingTypes";
import { MapViewStyles } from "./MapViewStyles";
import ApartmentsMapViewCard from "./MapViewComponents/apartmentsCard";


export default function Map() {
  const mapRef = useRef<MapView>(null);
  const [showListing, setShowListing] = useState<apartmentDataTypes | null>(
    null
  );
 
  
  const navigation = useNavigation<any>();

  const insets = useSafeAreaInsets();

  const goBackBtn = () => {
    navigation.goBack();
  };

  const handleMarkerPress = (coordinate: {
    item: apartmentDataTypes;
    latitude: number;
    longitude: number;
  }) => {
    // Animate the map to this coordinate
    mapRef.current?.animateToRegion(
      {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        latitudeDelta: 0.5, // smaller delta = zoom in
        longitudeDelta: 0.5,
      },
      1000 // animation duration in ms
    );
    setShowListing(coordinate.item);
  };

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={goBackBtn}
        style={[MapViewStyles.goBackIcon, {top: insets.top}]}
      >
        <Ionicons name="chevron-back" size={24} color={Colors.white} />
      </Pressable>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={MapViewStyles.mapView}
        initialRegion={{
          latitude: apartmentsData[2].location.latitude,
          longitude: apartmentsData[2].location.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {apartmentsData.map((item, index) => (
          <Marker
            key={`apartment-${index}`}
            coordinate={{
              latitude: item.location.latitude,
              longitude: item.location.longitude,
            }}
            onPress={() =>
              handleMarkerPress({
                item: item,
                latitude: item.location.latitude,
                longitude: item.location.longitude,
              })
            }
          >
            <View
              style={[
                MapViewStyles.apartmentsMarker,
                {
               
                backgroundColor:
                  item.availability.status === "RENTED"
                    ? "tomato"
                    : item.availability.status === "PENDING"
                    ? Colors.grayBottomTab
                    : Colors.purpleLight,
              }]}
            >
              <MaterialIcons name="apartment" color={Colors.white} size={15} />
            </View>
          </Marker>
        ))}
      </MapView>
      {showListing && (
          <ApartmentsMapViewCard showListing={showListing} setShowListing={setShowListing}/>
      )}
    </SafeAreaView>
  );
}
