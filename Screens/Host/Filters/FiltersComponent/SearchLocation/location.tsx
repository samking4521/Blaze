import { ActivityIndicator, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { Colors } from "../../../../../Constants";
import { SearchLocationStyles } from "./searchLocationStyles";

export default function LocationSearch() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  if (!location) {
    console.log("Error location message: ", errorMsg);
    return (
      <View style={SearchLocationStyles.loadingContainer}>
        <View style={SearchLocationStyles.loadingBox}>
          <ActivityIndicator size="large" color={Colors.purpleLight} />
          <Text style={SearchLocationStyles.loadingText}>Loading...</Text>
        </View>
      </View>
    );
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={SearchLocationStyles.mapViewStyle}
      mapType="hybrid"
      showsUserLocation={true}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    />
  );
}

