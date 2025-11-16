import { Dimensions, View } from "react-native";
import React, { memo, useRef, useState } from "react";
import { Image } from "expo-image";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel"
import Carousel, {ICarouselInstance} from "react-native-reanimated-carousel";
import { Colors } from "../../../../Constants";
import { ListingsStyle } from "../ListingsStyle";

type ImagesType = {
  images: string[];
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const WIDTH = Dimensions.get("window").width;
const CAROUSEL_WIDTH = WIDTH - 50;
const ASPECT_RATIO = 4/3.5; // width / height
const CAROUSEL_HEIGHT = CAROUSEL_WIDTH / ASPECT_RATIO;

const ApartmentsImageCarousel = ({ images }: ImagesType) => {
  const carouselRef = useRef<ICarouselInstance>(null)
  const [index, setIndex] = useState(0)

  const getIndex = (progress: number)=> {
      const theProgress = Math.abs(progress)
      const finalIndex = Math.floor( theProgress / CAROUSEL_WIDTH);
       setIndex(finalIndex);
  }

  return (
    <View>
      <Carousel
         width={CAROUSEL_WIDTH}
         height={CAROUSEL_HEIGHT}
         style={{borderRadius: 15}}
         loop
         onConfigurePanGesture={gestureChain => {
              gestureChain.activeOffsetX([-10, 10]);
            }}
          onProgressChange={(progress)=> getIndex(progress)}
        data={images}
         
        renderItem={({ item, index}) => (
          <Image
            style={ListingsStyle.apartmentImages}
            source={{ uri: item }}
            placeholder={{ blurhash }}
            contentFit="fill"
          />
        )}
      />
      <View style={ListingsStyle.dotsCarousel}>
          <AnimatedDotsCarousel
            length={images.length}
            scrollableDotsConfig={{
              setIndex,
              onNewIndex: (newIndex) => {
                carouselRef?.current?.scrollTo?.({
                  count: newIndex * CAROUSEL_WIDTH,
                  animated: true,
                });
              },
              containerBackgroundColor: 'rgba(230,230,230, 0.5)',
              container: {
                alignItems: 'center',
                borderRadius: 15,
                height: 30,
                justifyContent: 'center',
                paddingHorizontal: 15,
               }
            }}
            duration={100}
            currentIndex={index}
            maxIndicators={4}
            interpolateOpacityAndColor={true}
            activeIndicatorConfig={{
              color: Colors.purpleLight,
              margin: 3,
              opacity: 1,
              size: 8,
            }}
            inactiveIndicatorConfig={{
              color: Colors.whiteBgColor,
              margin: 3,
              opacity: 1,
              size: 6,
            }}
            decreasingDots={[
              {
                config: { color: Colors.whiteBgColor, margin: 3, opacity: 0.8, size: 4 },
                quantity: 1,
              },
              {
                config: { color: Colors.whiteBgColor, margin: 3, opacity: 0.8, size: 4 },
                quantity: 1,
              },
            ]}
          />
        </View>
        
    </View>
  );
};

export default memo(ApartmentsImageCarousel);

