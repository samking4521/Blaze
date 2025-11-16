import {
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  ScrollView,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../../Constants";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SignUpStyles } from "./SignUpStyles";
import { SignUpProps } from "../../../../Navigation/UserNavigation";

const googleLogo = require("../../../../assets/images/Google.png");

export default function SignUp({route}: SignUpProps) {
  const navigation = useNavigation<SignUpProps['navigation']>();
  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [validationError, setValidationError] = useState<string|null>("")
   const validName = /^[A-Za-z]+ [A-Za-z]+$/
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[^\s]{8,}$/
    const {defaultSignUp} = route.params
    
  const goToOnboarding = () => {
    // Navigation logic to go back or to sign in screen
    navigation.goBack();
  };

  const clearName = ()=> {
       nameRef.current?.clear()
       setName("")
  }
  const clearEmail = ()=> {
    emailRef.current?.clear()
    setEmail("")
}
const clearPassword = ()=> {
    passwordRef.current?.clear()
    setPassword("")
}

const setUserName = (name: string) => {
    if(validationError === "emptyName"){
        setValidationError(null)
    }
    if(validName.test(name) === true && validationError === "invalidName"){
        setValidationError(null)
    }

    setName(name);
}

const setUserEmail = (email: string) => {
    if(validationError === "emptyEmail"){
        setValidationError(null)
    }
    if(validEmail.test(email) === true && validationError === "invalidEmail"){
        setValidationError(null)
    }
    setEmail(email);
}

const setUserPassword = (password: string) => {
    if(validationError === "emptyPassword"){
        setValidationError(null)
    }
    if(validPassword.test(password) === true && validationError === "invalidPassword"){
        setValidationError(null)
    }
    setPassword(password);
}

const signUpUser = ()=>{
    

     if(validName.test(name) === true && validEmail.test(email) === true && validPassword.test(password) === true){
        // Proceed with sign-up logic
        console.log("Sign-up successful");
        navigation.navigate("VerificationCode", {email})
    }else{
        if(validName.test(name) === false){
           if(name.length === 0){
            // setValidationError("Name field cannot be empty.")
              setValidationError("emptyName")
           }else{
            // setValidationError("Please enter a valid full name.")
              setValidationError("invalidName")
           }
           return;
        }
        if(validEmail.test(email) === false){
            if(email.length === 0){
                setValidationError("emptyEmail")
               }else{
                setValidationError("invalidEmail")
               }
               return;
         }
         if (validPassword.test(password) === false){
        if(password.length === 0){
            setValidationError("emptyPassword")
           }else{
            setValidationError("invalidPassword")
           }
           return;
    
        }
    }
}

    const goToSignIn = ()=> {
          if(defaultSignUp){
              navigation.navigate("SignIn", {defaultSignUp: true})
          }else{
            navigation.goBack()
          }
    }

  return (
    <SafeAreaView style={SignUpStyles.container}>
      <StatusBar style="dark" />
       <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    //   keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0} // adjust for header height
    >
      <ScrollView  keyboardShouldPersistTaps="handled" style={{padding: 20}} showsVerticalScrollIndicator={false}>
      <View style={SignUpStyles.headerTextContainer}>
        <Pressable onPress={goToOnboarding} style={SignUpStyles.backIcon}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
        <Text style={SignUpStyles.headerText}>Create an account</Text>
      </View>
      <View>
        <View style={SignUpStyles.inputContainer}>
          <Text style={SignUpStyles.inputLabel}>Name</Text>
          <View
           style={[
            SignUpStyles.inputTextCont,
             
              {
                borderWidth: focusedInput === "name" ? 2 : 1,
                borderColor:
                  focusedInput === "name"
                    ? Colors.purpleLight
                    : Colors.grayBorder,
              },
            ]}
          >
            <TextInput
            style={SignUpStyles.input}
            ref={nameRef}
            value={name}
            onChangeText={setUserName}
            onFocus={() => setFocusedInput("name")}
            onBlur={() => setFocusedInput(null)}
            keyboardType="default"
            autoCapitalize="words"
            autoCorrect={false}
            placeholder="John Moe"
             returnKeyType="next"
           submitBehavior="blurAndSubmit"
            onSubmitEditing={() => emailRef.current?.focus()}
           
            placeholderTextColor={Colors.grayPlaceholder}
          />
           { (focusedInput === "name" && name.length > 0) && <Ionicons onPress={clearName} name="close-circle" size={24} style={{marginHorizontal: 10}} color={Colors.grayText} />}
          </View>
         {validationError === "emptyName" && <Text style={SignUpStyles.errorText}>Name field cannot be empty.</Text>}
         {validationError === "invalidName" && <Text style={SignUpStyles.errorText}>Please enter a valid full name.</Text>}
        </View>
        <View style={SignUpStyles.inputContainer}>
          <Text style={SignUpStyles.inputLabel}>Email Address</Text>
          <View 
          style={[
              SignUpStyles.inputTextCont,
              {
                borderWidth: focusedInput === "email" ? 2 : 1,
                borderColor:
                  focusedInput === "email"
                    ? Colors.purpleLight
                    : Colors.grayBorder,
              },
            ]}>
            <TextInput
            style={SignUpStyles.input}
            ref={emailRef}
             value={email}
            onChangeText={setUserEmail}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="johnmoe@gmail.com"
              returnKeyType="next"
           submitBehavior="blurAndSubmit"
            onSubmitEditing={() => passwordRef.current?.focus()}
            
            placeholderTextColor={Colors.grayPlaceholder}
          />
          { (focusedInput === "email" && email.length > 0) && <Ionicons onPress={clearEmail} name="close-circle" size={24} style={{marginHorizontal: 10}} color={Colors.grayText} />}
          </View>
            {(validationError === "emptyEmail") && <Text style={SignUpStyles.errorText}>Email field cannot be empty.</Text>}
            {validationError === "invalidEmail" && <Text style={SignUpStyles.errorText}>Please enter a valid email address.</Text>}
        </View>
        <View style={SignUpStyles.inputContainer}>
          <Text style={SignUpStyles.inputLabel}>Password</Text>
          <View
           style={[
              SignUpStyles.inputTextCont,
              {
                borderWidth: focusedInput === "password" ? 2 : 1,
                borderColor:
                  focusedInput === "password"
                    ? Colors.purpleLight
                    : Colors.grayBorder,
              },
            ]}>
            <TextInput
            style={SignUpStyles.input}
            ref={passwordRef}
             value={password}
            onChangeText={setUserPassword}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            secureTextEntry={passwordVisible? false : true}
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            placeholderTextColor={Colors.grayPlaceholder}
          />
          { (focusedInput === "password" && password.length > 0) && <Ionicons onPress={clearPassword} name="close-circle" size={24} style={{marginHorizontal: 10}} color={Colors.grayText} />}
          <Feather onPress={()=> setPasswordVisible(!passwordVisible)} name={passwordVisible? "eye-off" : "eye"} size={24} color={Colors.grayText} style={{borderLeftWidth: 2, borderColor: Colors.grayBorder, paddingHorizontal: 15}}/>
          </View>
          {validationError === "emptyPassword" && <Text style={SignUpStyles.errorText}>Password field cannot be empty.</Text>}
          { password.length > 0 && <View style={{flexDirection: "row", alignItems: "center"}}>
            <Ionicons name="checkmark-circle" size={22} color={validPassword.test(password) === true? Colors.green : Colors.grayText} style={{marginRight: 5}} />
                <Text style={SignUpStyles.passwordCheck}>At least 8 chars, one uppercase, one lowercase, one symbol.</Text>
                  </View>
                }
        </View>
      </View>
      <View>
        <Text style={SignUpStyles.termsContainer}>
          By continuing, you agree to our{" "}
          <Text style={SignUpStyles.termsText}>
            Terms of Service and Privacy Policy.
          </Text>
        </Text>
      </View>
      <Pressable onPress={signUpUser} style={SignUpStyles.actionButtonSignUp}>
        <Text style={SignUpStyles.signUpText}>Sign up</Text>
      </Pressable>

      <View style={SignUpStyles.divider}>
        <View style={SignUpStyles.horizontal_line} />
        <Text style={SignUpStyles.orText}>or</Text>
        <View style={SignUpStyles.horizontal_line} />
      </View>

      <View style={SignUpStyles.customGoogleButton}>
        <Image source={googleLogo} style={SignUpStyles.googleLogoImg} />
        <Text style={SignUpStyles.signUpWithGoogleText}>Continue with Google</Text>
      </View>
      <View style={SignUpStyles.goToSignIn}>
        <Text style={SignUpStyles.goToSignInTextDesc}>
          Already have an account?{" "}
          <Text onPress={goToSignIn} style={SignUpStyles.signInText}>Sign in</Text>
        </Text>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}