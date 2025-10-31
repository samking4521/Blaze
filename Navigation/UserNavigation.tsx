import * as React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from '../Screens/User/Home';
import OnBoardingScreen from '../Screens/User/AuthScreens/OnBoarding/OnBoardingScreen';
import SignUp from '../Screens/User/AuthScreens/SignUp/SignUp';
import VerificationCode from '../Screens/User/AuthScreens/VerificationCode/VerificationCode';
import SignIn from '../Screens/User/AuthScreens/SignIn/SignIn';
import ForgotPassword from '../Screens/User/AuthScreens/ForgotPassword/ForgotPassword';

export type RootStackParamList = {
  Home: undefined;
  OnBoardingScreen: undefined;
  SignUp: {defaultSignUp?: boolean};
  SignIn: {defaultSignUp?: boolean};
  VerificationCode: { email: string };
  ForgotPassword: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type OnBoardingScreenProps = NativeStackScreenProps<RootStackParamList, 'OnBoardingScreen'>;
export type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
export type VerificationCodeProps = NativeStackScreenProps<RootStackParamList, 'VerificationCode'>;
export type ForgotPasswordProps = NativeStackScreenProps<RootStackParamList, 'VerificationCode'>;



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function UserNavigation(){
  return (
    <Stack.Navigator initialRouteName='OnBoardingScreen' screenOptions={{headerShown: false, animation: 'slide_from_right', gestureEnabled: true, gestureDirection: 'horizontal'}}>
        <Stack.Screen 
            name="Home" 
            component={Home} 
        />
        <Stack.Screen
           name="OnBoardingScreen"
           component={OnBoardingScreen}
           />
           <Stack.Screen
           name="SignUp"
           component={SignUp}
           />
           <Stack.Screen
            name="VerificationCode"
           component={VerificationCode}
           />
            <Stack.Screen
            name="SignIn"
           component={SignIn}
           />
            <Stack.Screen
            name="ForgotPassword"
           component={ForgotPassword}
           />
    </Stack.Navigator>
  );
}