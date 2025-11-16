import { ScrollView, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../../Constants";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { HostListingFormStyles } from "./HostListingFormStyles";

const infoPlaceImg = require("../../../../assets/images/infoPlace.png");
const verifiedImg = require("../../../../assets/images/verified.png");
const launchImg = require("../../../../assets/images/launch.png");

export default function HostOnboarding() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={HostListingFormStyles.onBoardingContainer}>
      <View
        style={{
          padding: 15,
        }}
      >
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back"
          size={30}
          color={Colors.grayText}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animated.View
            entering={FadeInDown.duration(500)}
            style={{ gap: 5, padding: 15 }}
          >
            <Text style={HostListingFormStyles.headerLabel}>
              Earn Fast on Blaze,{`\n`}Rent to the Right People
            </Text>
            <Text style={HostListingFormStyles.headerDescText}>
              Blaze helps you connect with verified renters looking for spaces
              like yours.{`\n`}Get started in just 4 simple steps.
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000)}>
            <View style={HostListingFormStyles.hostInstructionContainer}>
              <View style={HostListingFormStyles.instructionCountContainer}>
                <Text style={HostListingFormStyles.instructionCountText}>
                  1
                </Text>
              </View>
              <View>
                <Text style={HostListingFormStyles.instructionHeaderLabel}>
                  Tell us about your property
                </Text>
                <Text style={HostListingFormStyles.instructionText}>
                  Share data such as location, photos,{`\n`}and pricing.{`\n`}
                  The clearer you are,{`\n`}the faster renters find you.
                </Text>
              </View>
              <View style={HostListingFormStyles.imageCont}>
                <Image
                  source={infoPlaceImg}
                  style={HostListingFormStyles.image}
                  resizeMode="cover"
                />
              </View>
            </View>
            <View style={HostListingFormStyles.hostInstructionContainer}>
              <View style={HostListingFormStyles.instructionCountContainer}>
                <Text style={HostListingFormStyles.instructionCountText}>
                  2
                </Text>
              </View>
              <View>
                <Text style={HostListingFormStyles.instructionHeaderLabel}>
                  Verify your identity
                </Text>
                <Text style={HostListingFormStyles.instructionText}>
                  Confirm you&apos;re a real landlord or{`\n`}agent so renters
                  trust your listings.
                </Text>
              </View>
              <View style={HostListingFormStyles.imageCont}>
                <Image
                  source={verifiedImg}
                  style={HostListingFormStyles.image}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={HostListingFormStyles.hostInstructionContainer}>
              <View style={HostListingFormStyles.instructionCountContainer}>
                <Text style={HostListingFormStyles.instructionCountText}>
                  3
                </Text>
              </View>
              <View>
                <Text style={HostListingFormStyles.instructionHeaderLabel}>
                  Get your property verified
                </Text>
                <Text style={HostListingFormStyles.instructionText}>
                  We&apos;ll review your space to{`\n`}make sure everything
                  checks out.
                </Text>
              </View>
              <View style={HostListingFormStyles.imageCont}>
                <Image
                  source={infoPlaceImg}
                  style={HostListingFormStyles.image}
                  resizeMode="cover"
                />
                <View style={HostListingFormStyles.floatingImageCont}>
                  <Image
                    source={verifiedImg}
                    style={HostListingFormStyles.floatingImage}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>
            <View style={[HostListingFormStyles.hostInstructionContainer, {borderBottomWidth: 0}]}>
              <View style={HostListingFormStyles.instructionCountContainer}>
                <Text style={HostListingFormStyles.instructionCountText}>
                  4
                </Text>
              </View>
              <View>
                <Text style={HostListingFormStyles.instructionHeaderLabel}>
                  Publish and Launch
                </Text>
                <Text style={HostListingFormStyles.instructionText}>
                  Once approved, your listing goes{"\n"}live and renters can
                  start{"\n"}reaching out immediately.
                </Text>
              </View>
              <View style={HostListingFormStyles.imageCont}>
                <Image
                  source={infoPlaceImg}
                  style={HostListingFormStyles.image}
                  resizeMode="cover"
                />
                <View style={HostListingFormStyles.floatingImageContTwo}>
                  <Image
                    source={launchImg}
                    style={HostListingFormStyles.floatingImageTwo}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </Animated.View>
        </ScrollView>
        <Animated.View
          entering={FadeInDown.duration(1500)}
          style={HostListingFormStyles.getStartedBtnCont}
        >
          <Pressable
            onPress={() => navigation.navigate("TypeOfPlace")}
            style={HostListingFormStyles.getStartedBtn}
          >
            <Text style={HostListingFormStyles.getStartedText}>
              Get Started
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
