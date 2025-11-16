import { useState, useRef } from 'react'
import { Text, Pressable, TextInput, View, ScrollView, Image, KeyboardAvoidingView, Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../../Constants'
import { StatusBar } from 'expo-status-bar'
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { SignInProps } from '../../../../Navigation/UserNavigation'
import { SignInStyles } from './SignInStyles'

const googleImg = require("../../../../assets/images/Google.png")


export default function SignIn({route}: SignInProps) {
      const emailRef = useRef<TextInput>(null);
       const passwordRef = useRef<TextInput>(null);
       const navigation = useNavigation<SignInProps['navigation']>()
        const [focusedInput, setFocusedInput] = useState<string | null>(null);
        const [email, setEmail] = useState("")
        const [pressSignedIn, setPressedSignIn] = useState(false)
         const [passwordVisible, setPasswordVisible] = useState(false)
        const [password, setPassword] = useState("")
          const [validationError, setValidationError] = useState<string|null>("")
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[^\s]{8,}$/
    const {defaultSignUp} = route.params

     const goToOnboarding = () => {
    // Navigation logic to go back or to sign in screen
    navigation.goBack();
  };

  const goToSignUp = ()=> {
      if(defaultSignUp){
          navigation.goBack()
      }else{
         navigation.navigate("SignUp", {defaultSignUp})
      }
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

const clearEmail = ()=> {
    emailRef.current?.clear()
    setEmail("")
}
const clearPassword = ()=> {
    passwordRef.current?.clear()
    setPassword("")
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

const changeSignInOptions = () => {
     setPressedSignIn(!pressSignedIn)
}

const signInUser = () => {
   if(validEmail.test(email) === true && validPassword.test(password) === true){
        // Proceed with sign-up logic
        console.log("Sign-in successful");
        
    }else{
        
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

const goToForgotPwd = () => {
     navigation.navigate("ForgotPassword")
}


  return (
    <SafeAreaView style={SignInStyles.container}>
         <StatusBar style="dark" />
       <KeyboardAvoidingView
             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
             style={{ flex: 1 }}
           //   keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0} // adjust for header height
           >
             <ScrollView  keyboardShouldPersistTaps="handled" style={{padding: 20}} showsVerticalScrollIndicator={false}>
           <View style={SignInStyles.body}>
                   <Pressable onPress={goToOnboarding} style={SignInStyles.backIcon}>
                      <Ionicons name="arrow-back-outline" size={24} color="black" />
                    </Pressable>
             <View>
                    <Text style={SignInStyles.headerText}>Sign In</Text>
                    <Text style={SignInStyles.headerDescText}>blaze - google for places</Text>
             </View>
             <View style={SignInStyles.textInputBoxes}>
                <View>
                    <Text style={SignInStyles.label}>Email Address</Text>
                    <View style={[SignInStyles.textInputBox, 
                         {
                                            borderWidth: focusedInput === "email" ? 2 : 1,
                                            borderColor:
                                              focusedInput === "email"
                                                ? Colors.purpleLight
                                                : Colors.grayBorder,
                                          },
                    ]}>
                         <TextInput style={SignInStyles.textInput}
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
{validationError === "emptyEmail" && <Text style={SignInStyles.errorText}>Email field cannot be empty.</Text>}
         {validationError === "invalidEmail" && <Text style={SignInStyles.errorText}>Please enter a valid email.</Text>} 
                   </View>
                     <View style={SignInStyles.passwordCont}>
                        <View style={SignInStyles.passwordLabelCont}>
                              <Text style={SignInStyles.label}>Password</Text>
                            <Text onPress={goToForgotPwd} style={SignInStyles.forgotPwd}>Forgot Password?</Text>
                        </View>
                               <View style={[SignInStyles.textInputBox, 
                                 {
                            
                                        borderWidth: focusedInput === "password" ? 2 : 1,
                                        borderColor:
                                            focusedInput === "password"
                                            ? Colors.purpleLight
                                            : Colors.grayBorder,              
                            
                         }
                               ]}>
                         <TextInput style={SignInStyles.textInput}
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
                  
                                         {validationError === "emptyPassword" && <Text style={SignInStyles.errorText}>Password field cannot be empty.</Text>}
                                         {validationError === "invalidPassword" && <Text style={SignInStyles.errorText}>At least 8 chars, one uppercase, one lowercase, one symbol.</Text>}

                    
                </View>
             </View>

           
                <View style={SignInStyles.signedIn}>
                     <FontAwesome onPress={changeSignInOptions} name="check-square" size={24} color={pressSignedIn? Colors.purpleLight : Colors.grayText} />
                     <Text style={SignInStyles.headerDescText}>Keep me signed in</Text>
                </View>

                <Pressable onPress={signInUser} style={SignInStyles.actionButton}>
                     <Text style={SignInStyles.actionButtonText}>Sign In</Text>
                </Pressable>

                <View style={SignInStyles.divider}>
                        <View style={SignInStyles.horizontal_line} />
                        <Text style={SignInStyles.orText}>or</Text>
                        <View style={SignInStyles.horizontal_line} />
                      </View>

            <View style={SignInStyles.customGoogleSignIn}>
               <Image source={googleImg} style={SignInStyles.googleImg} />
        <Text style={SignInStyles.customGoogleSignInText}>Continue with Google</Text>
      </View>
           
           <Pressable onPress={goToSignUp} style={{marginTop: 50}}>
               <Text style={SignInStyles.createAccText}>Create an account</Text>
           </Pressable>
               
           </View>

           
           </ScrollView>
           </KeyboardAvoidingView>
      
    </SafeAreaView>
  )
}
