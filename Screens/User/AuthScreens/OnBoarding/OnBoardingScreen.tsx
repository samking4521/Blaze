import { Pressable, Text, View } from 'react-native'
import { Colors } from '../../../../Constants';
import React, { useState } from 'react'
import { onboardingImages } from '../../../../assets/data/onboardingImages';
import { StatusBar } from 'expo-status-bar';
import Animated, {  FadeInDown } from 'react-native-reanimated';
import OnBoardingSlidesList from './OnBoardingComponent/OnBoardingSlidesList';
import { useNavigation } from '@react-navigation/native';
import { OnBoardingStyles } from './OnBoardingStyles';



export default function OnBoardingScreen() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigation = useNavigation<any>()

    const getActiveIndex = (index: number)=> {
         setActiveIndex(index)
    }

    const goToSignUpScreen = () => {
        navigation.navigate("SignUp", {defaultSignUp: true})
    }

    const goToSignIn = () => {
        navigation.navigate("SignIn", {defaultSignUp: false})
    }

  return (
    <View style={OnBoardingStyles.container}> 
      <StatusBar style="light" />

      <View>
          <OnBoardingSlidesList getActiveIndex={getActiveIndex}/>
      </View>

          <Animated.View 
          entering={FadeInDown.duration(500).delay(400)}
           style={OnBoardingStyles.paginationSlidesContainer}>
              {
                onboardingImages.map((_, i) => {
                  return (
                  <View key={`indicator-${i}`} 
                  style={[OnBoardingStyles.paginationSlides, {width: activeIndex === i? 30:15, backgroundColor: activeIndex === i? Colors.purpleLight: Colors.white}]}/>
                )})  
              }
             
          </Animated.View>
    

     <Animated.View entering={FadeInDown.duration(500).delay(600)}  style={OnBoardingStyles.actionButtons}>
        <Pressable onPress={goToSignUpScreen} style={OnBoardingStyles.getStartedButton}>
             <Text style={OnBoardingStyles.getStartedText}>Get Started</Text>
          </Pressable>
     
      <View style={OnBoardingStyles.signInContainer}>
          <Text style={OnBoardingStyles.signInDesc}>Already have an account? </Text>
          <Text onPress={goToSignIn} style={OnBoardingStyles.signInText}>Sign In</Text>
      </View>
     </Animated.View>

          
    </View>

   
  )
}

