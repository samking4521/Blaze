import { Dimensions, FlatList, Image, View } from 'react-native'
import { Colors } from '../../Constants';
import React from 'react'
import { onboardingImages } from '../../assets/onboardingImages';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { runOnJS, FadeInDown, useAnimatedRef, useDerivedValue, useScrollOffset, clamp, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { OnBoardingStyles } from '../../Screens/User/AuthScreens/OnBoarding/OnBoardingStyles';

const {width, height} =  Dimensions.get('window');

const WIDTH = width;
const HEIGHT = 55/100 * height;

type onBoardSlidesType = {
     uri: number,
      title: string,
      description: string
} 

export default function OnBoardingSlidesList({getActiveIndex}: {getActiveIndex: (index: number)=> void}) {
      const animatedRef = useAnimatedRef<FlatList>();
      const offset = useScrollOffset(animatedRef);
     
      
    
    const executeOnJSThread = (value: number) => {
      const indexValue = Math.floor(value/WIDTH);
      getActiveIndex(indexValue)
    };
    
    useDerivedValue(() => {
      let clampedOffset = clamp(offset.value, 0, (onboardingImages.length - 1) * WIDTH);
      runOnJS(executeOnJSThread)(clampedOffset);
    });
     
      const renderItem = ({item, index}: {item: onBoardSlidesType, index: number})=> {
         return (
             <Animated.View
             entering={FadeInRight.duration(500)}
             exiting={FadeInLeft.duration(500)}
             key={`img-${index}`} >
              
              <View>
                
               <Image source={item.uri} style={{
      width: WIDTH,
      height: HEIGHT
    }} />
                  <LinearGradient
               colors={["#00000000", Colors.purpleDeep, Colors.purpleDeep]}
               start={{x: 0, y: 0}}
               end={{x: 0, y: 1}}
               style={{
                position: "absolute", 
                left: 0,
                right: 0,
                bottom: 0,
                height: "20%"
               }}
               pointerEvents='none'
               locations={[0, 0.8, 1]}
               />
                 <LinearGradient
               colors={[Colors.purpleDeep, Colors.purpleDeep, "#00000000"]}
               start={{x: 0, y: 0}}
               end={{x: 0, y: 1}}
               style={{
                position: "absolute", 
                left: 0,
                right: 0,
                top: 0,
                height: "15%"
               }}
               pointerEvents='none'
               locations={[0, 0.2, 1]}
               />
              </View>
                
                <View style={{width: WIDTH, justifyContent: "center", alignItems: "center", padding: 5}}>
                  
                <Animated.Text entering={FadeInDown.duration(500).delay(200)} style={OnBoardingStyles.title}>{item.title}</Animated.Text>
                <Animated.Text entering={FadeInDown.duration(500).delay(400)} style={OnBoardingStyles.description}>{item.description}</Animated.Text>
                </View>
             
             </Animated.View>
         )
      }
  return (
    <View>
       <Animated.FlatList
                 ref={animatedRef}
                 horizontal
                 data={onboardingImages}
                 renderItem={renderItem}
                 keyExtractor={(_, index) => index.toString()}
                 pagingEnabled
                 bounces={false}
                 showsHorizontalScrollIndicator={false}  
               />
    </View>
  )
}