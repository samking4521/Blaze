import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Pressable,
  TextInputKeyPressEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../../Constants";
import { useNavigation } from "@react-navigation/native";
import { VerificationCodeProps } from "../../../../Navigation/UserNavigation";
import { VerificationStyles } from "./VerificationStyles";

export default function VerificationCode({ route }: VerificationCodeProps) {
  const length = 6;
  const inputs = useRef<TextInput[]>([]);
  const [codes, setCodes] = useState<string[]>(Array(length).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const navigation = useNavigation<VerificationCodeProps['navigation']>()
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(true);
  const [codeResent, setCodeResent] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { email } = route.params

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(intervalRef.current!);
      setIsActive(false);
    }

    return () => clearInterval(intervalRef.current!);
  }, [isActive, timeLeft]);

  // 👇 Format to mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(secs).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };


  const handleChangeText = (text: string, index: number) => {
    const newCodes = [...codes];
    newCodes[index] = text.slice(-1); // limit to 1 character
    setCodes(newCodes);

    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: TextInputKeyPressEvent, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !codes[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const goBackBtn = () => {
    navigation.goBack()
  }

  const resendOtpCode = ()=> {
      if(isActive){
        return
      }
      console.log("OTP resent success")
      setIsActive(true)
      setTimeLeft(60)
      setCodeResent(true)
  }

  const verifyCode = () => {
      // Verify your code 
  }

  return (
    <SafeAreaView style={VerificationStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{ padding: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={VerificationStyles.body}>
            <Pressable onPress={goBackBtn} style={VerificationStyles.goBackBtn}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </Pressable>

            <View style={VerificationStyles.headerTextBox}>
              <Text style={VerificationStyles.headerText}>Email Verification</Text>
              <Text style={VerificationStyles.headerDescText}>
                {codeResent? `A new 6-digit verification code has been sent to your mail at ${email}` : `Enter the 6-digit verification code we just sent to your email at ${email}`}
              </Text>
            </View>

            <View style={VerificationStyles.inputBoxesCont}>
              {codes.map((value, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {inputs.current[index] = ref!}}
                  caretHidden
                  value={value}
                  onChangeText={(text) => handleChangeText(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  keyboardType="decimal-pad"
                  maxLength={1}
                  style={[
                    VerificationStyles.inputBox,
                    {
                      borderColor:
                        focusedIndex === index
                          ? Colors.purpleLight
                          : Colors.grayBorder,
                    },
                  ]}
                />
              ))}
            </View>

            <Pressable onPress={verifyCode} style={VerificationStyles.actionBtn}>
              <Text style={VerificationStyles.verifyText}>Verify</Text>
            </Pressable>

            <View>
              <Text style={VerificationStyles.timerText}>Resend OTP in <Text style={VerificationStyles.timer}>{formatTime(timeLeft)}</Text></Text>
              <Text onPress={resendOtpCode} style={[VerificationStyles.resendOtp, {color: isActive? Colors.grayText : Colors.purpleLight}]}>Resend OTP</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}