import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Listings from '../Screens/Host/Listings/Listings';
import Profile from '../Screens/Host/Profile/Profile';
import Bookings from '../Screens/Host/Bookings/Bookings';
import Chats from '../Screens/Host/Chats/Chats';
import { Feather } from '@expo/vector-icons';
import { Colors, FONT_FAMILY, FONT_SIZE } from '../Constants';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import Filters from '../Screens/Host/Filters/Filters';
import Map from '../Screens/Host/Listings/MapView/map';
import HostOnboarding from '../Screens/Host/Listings/HostListingForm/HostOnboarding';
import TypeOfPlace from '../Screens/Host/Listings/HostListingForm/TypeOfPlace';
import PlaceAmenities from '../Screens/Host/Listings/HostListingForm/PlaceAmenities';
import { apartmentAmenitiesType } from '../Screens/Host/Listings/HostListingForm/HostListingFormTypes/apartmentAmenitiesTypes';

export type RootStackParamList = {
  ListingsScreen: undefined;
  Filters: undefined;
  Map: undefined;
  HostOnboarding: undefined;
  TypeOfPlace: undefined;
  PlaceAmenities: {apartmentAmenities: apartmentAmenitiesType[], office_Business_Amenities: apartmentAmenitiesType[]};
};

export type ListingScreenProps = NativeStackScreenProps<RootStackParamList, 'ListingsScreen'>;
export type FiltersProps = NativeStackScreenProps<RootStackParamList, 'Filters'>;
export type MapProps = NativeStackScreenProps<RootStackParamList, 'Map'>;
export type HostOnboardingProps = NativeStackScreenProps<RootStackParamList, 'HostOnboarding'>;
export type TypeOfPlaceProps = NativeStackScreenProps<RootStackParamList, 'TypeOfPlace'>;
export type PlaceAmenitiesProps = NativeStackScreenProps<RootStackParamList, 'PlaceAmenities'>;

const Tab = createBottomTabNavigator();
const HostNativeStack = createNativeStackNavigator<RootStackParamList>()


type IconProps = {
  name: keyof typeof Feather.glyphMap;
  focused: boolean;
  color: string;
  size: number;
};

const AnimatedIcon = ({ name, focused, color, size }: IconProps) => {
  const scale = useSharedValue(focused ? 1.2 : 1);

  useEffect(() => {
    scale.value = withTiming(focused ? 1.2 : 1, { duration: 180 });
  }, [focused, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Feather name={name} size={size} color={color} />
    </Animated.View>
  );
};


const HostNativeStackNavigation = ()=> {
  return(
      <HostNativeStack.Navigator screenOptions={{headerShown: false, animation: "ios_from_right"}}>
              <HostNativeStack.Screen name="ListingsScreen" component={HostBottomTabsNavigation} />
              <HostNativeStack.Screen name="Filters" component={Filters}/> 
                <HostNativeStack.Screen name="Map" component={Map}/> 
                 <HostNativeStack.Screen name="HostOnboarding" component={HostOnboarding}/> 
                                  <HostNativeStack.Screen name="TypeOfPlace" component={TypeOfPlace}/> 
                  <HostNativeStack.Screen name="PlaceAmenities" component={PlaceAmenities}/> 

      </HostNativeStack.Navigator>
  )
}


const HostBottomTabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarBackground: () => {
            return (
                <View style={{...StyleSheet.absoluteFillObject, backgroundColor: Colors.whiteBgColor}}/>
            )
        },
        tabBarLabelStyle: { fontSize: FONT_SIZE.xs, fontFamily: FONT_FAMILY.regular},
        tabBarActiveTintColor: Colors.purpleLight,
        tabBarInactiveTintColor: Colors.grayBottomTab,
        tabBarIcon: ({ focused, color }) => {
            let iconName: keyof typeof Feather.glyphMap;
          switch (route.name) {
            case 'Listings':
               iconName = 'home';
              break;
            case 'Bookings':
               iconName = 'calendar';
              break;
            case 'Chats':
               iconName = 'message-circle';
              break;
            case 'Profile':
              iconName = 'user';
              break;
            default:
              return null;
          }
          return (
               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <AnimatedIcon
                name={iconName}
                focused={focused}
                color={color}
                size={22}
              />
            </View>
          )
        },
      })}
 >
      <Tab.Screen name="Listings" component={Listings}  />
        <Tab.Screen name="Bookings" component={Bookings} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: "Me"}} />
     
    </Tab.Navigator>
  );
}

export default HostNativeStackNavigation