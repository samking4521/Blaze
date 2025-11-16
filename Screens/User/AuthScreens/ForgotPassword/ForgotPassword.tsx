import { useState, useRef } from 'react'
import { Text, TextInput, Pressable, View, KeyboardAvoidingView, ScrollView, Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../../Constants'
import { Ionicons, Feather } from '@expo/vector-icons'
import { ForgotPasswordStyles } from './ForgotPasswordStyles'
import { useNavigation } from '@react-navigation/native'
import { ForgotPasswordProps } from '../../../../Navigation/UserNavigation'

export default function ForgotPassword() {
     const [focusedInput, setFocusedInput] = useState<string | null>(null);
     const navigation = useNavigation<ForgotPasswordProps['navigation']>();
      
       const emailRef = useRef<TextInput>(null);
       const passwordRef = useRef<TextInput>(null);
        const passwordRefTwo = useRef<TextInput>(null);
       const [email, setEmail] = useState("")
       const [password, setPassword] = useState("")
        const [passwordTwo, setPasswordTwo] = useState("")
       const [passwordVisible, setPasswordVisible] = useState(false)
       const [validationError, setValidationError] = useState<string|null>("")
         const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
         const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[^\s]{8,}$/
    

         const goBackBtn = ()=> {
            navigation.goBack()
         }

          const clearEmail = ()=> {
    emailRef.current?.clear()
    setEmail("")
}
const clearPassword = ()=> {
    passwordRef.current?.clear()
    setPassword("")
}

const clearPasswordTwo = ()=> {
    passwordRefTwo.current?.clear()
    setPasswordTwo("")
}

const goToSignUp = ()=>{
     navigation.reset({
    index: 1,
    routes: [{ name: 'OnBoardingScreen' }, {name: 'SignUp', params: {defaultSignUp: true }}],
  });
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

const setUserPasswordTwo = (password: string) => {
    if(validationError === "emptyPasswordTwo"){
        setValidationError(null)
    }
    if(validPassword.test(password) === true && validationError === "invalidPasswordTwo"){
        setValidationError(null)
    }
    setPasswordTwo(password);
}

const resetPassword = () => {
      if(validEmail.test(email) === true && validPassword.test(password) === true && password === passwordTwo){
        // Proceed with reset password logic
        console.log("Reset password successful");
        navigation.navigate("VerificationCode", {email})
    }else{
        if(validEmail.test(email) === false){
            if(email.length === 0){
                setValidationError("emptyEmail")
               }else{
                setValidationError("invalidEmail")
               }
               return;
         }
         if (validPassword.test(password) === false || password !== passwordTwo){
        if(password.length === 0){
            setValidationError("emptyPassword")
           }
           return;
    
        }
    }
}


  return (
     <SafeAreaView style={ForgotPasswordStyles.container}>
           <KeyboardAvoidingView
                       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                       style={{ flex: 1 }}
                     //   keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0} // adjust for header height
                     >
                       <ScrollView  keyboardShouldPersistTaps="handled" style={{padding: 20}} showsVerticalScrollIndicator={false}>
                            <View style={{flex: 1}}>
                                <Pressable onPress={goBackBtn} style={ForgotPasswordStyles.backIcon}>
                                                      <Ionicons name="arrow-back-outline" size={24} color="black" />
                                                    </Pressable>
                                        <View style={{marginVertical: 20}}>
                                                    <Text style={ForgotPasswordStyles.headerText}>Forgot Password</Text>
                                                    <Text style={ForgotPasswordStyles.headerTextDesc}>Please enter your email and create a new password to continue.</Text>
                                             </View>
                                    <View>
                                      
        <View style={ForgotPasswordStyles.inputContainer}>
          <Text style={ForgotPasswordStyles.inputLabel}>Email Address</Text>
          <View 
          style={[
              ForgotPasswordStyles.inputTextCont,
              {
                borderWidth: focusedInput === "email" ? 2 : 1,
                borderColor:
                  focusedInput === "email"
                    ? Colors.purpleLight
                    : Colors.grayBorder,
              },
            ]}>
            <TextInput
            style={ForgotPasswordStyles.input}
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
            {(validationError === "emptyEmail") && <Text style={ForgotPasswordStyles.errorText}>Email field cannot be empty.</Text>}
            {validationError === "invalidEmail" && <Text style={ForgotPasswordStyles.errorText}>Please enter a valid email address.</Text>}
        </View>
         <View style={ForgotPasswordStyles.inputContainer}>
          <Text style={ForgotPasswordStyles.inputLabel}>Enter new password</Text>
          <View
           style={[
              ForgotPasswordStyles.inputTextCont,
              {
                borderWidth: focusedInput === "password" ? 2 : 1,
                borderColor:
                  focusedInput === "password"
                    ? Colors.purpleLight
                    : Colors.grayBorder,
              },
            ]}>
            <TextInput
            style={ForgotPasswordStyles.input}
            ref={passwordRef}
             value={password}
            onChangeText={setUserPassword}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            secureTextEntry={passwordVisible? false : true}
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            placeholderTextColor={Colors.grayPlaceholder}
              onSubmitEditing={() => passwordRefTwo.current?.focus()}
          />
          { (focusedInput === "password" && password.length > 0) && <Ionicons onPress={clearPassword} name="close-circle" size={24} style={{marginHorizontal: 10}} color={Colors.grayText} />}
          <Feather onPress={()=> setPasswordVisible(!passwordVisible)} name={passwordVisible? "eye-off" : "eye"} size={24} color="black" style={{borderLeftWidth: 2, borderColor: Colors.grayBorder, paddingHorizontal: 15}}/>
          </View>
          {validationError === "emptyPassword" && <Text style={ForgotPasswordStyles.errorText}>Password field cannot be empty.</Text>}
         
        </View>
        <View style={ForgotPasswordStyles.inputContainer}>
          <Text style={ForgotPasswordStyles.inputLabel}>Re-enter new password</Text>
          <View
           style={[
              ForgotPasswordStyles.inputTextCont,
              {
                borderWidth: focusedInput === "passwordTwo" ? 2 : 1,
                borderColor:
                  focusedInput === "passwordTwo"
                    ? Colors.purpleLight
                    : Colors.grayBorder,
              },
            ]}>
            <TextInput
            style={ForgotPasswordStyles.input}
            ref={passwordRefTwo}
             value={passwordTwo}
            onChangeText={setUserPasswordTwo}
            onFocus={() => setFocusedInput("passwordTwo")}
            onBlur={() => setFocusedInput(null)}
            secureTextEntry={passwordVisible? false : true}
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            placeholderTextColor={Colors.grayPlaceholder}
          />
          { (focusedInput === "passwordTwo" && password.length > 0) && <Ionicons onPress={clearPasswordTwo} name="close-circle" size={24} style={{marginHorizontal: 10}} color={Colors.grayText} />}
          <Feather onPress={()=> setPasswordVisible(!passwordVisible)} name={passwordVisible? "eye-off" : "eye"} size={24} color="black" style={{borderLeftWidth: 2, borderColor: Colors.grayBorder, paddingHorizontal: 15}}/>
          </View>
          {validationError === "emptyPasswordTwo" && <Text style={ForgotPasswordStyles.errorText}>Password field cannot be empty.</Text>}
           { password.length > 0 && <View style={{marginTop: 10}}>
             <View style={{flexDirection: "row", alignItems: "center"}}>
            <Ionicons name="checkmark-circle" size={22} color={validPassword.test(password) === true? Colors.green : Colors.grayText} style={{marginRight: 5}} />
                <Text style={ForgotPasswordStyles.passwordCheck}>At least 8 chars, one uppercase, one lowercase, one symbol.</Text>
                  </View>
                   <View style={{flexDirection: "row", alignItems: "center", marginTop: 5}}>
            <Ionicons name="checkmark-circle" size={22} color={password === passwordTwo? Colors.green : Colors.grayText} style={{marginRight: 5}} />
                <Text style={ForgotPasswordStyles.passwordCheck}>Passwords must be the same</Text>
                  </View>
               </View>
            
                }
        </View>
         
                </View>
              <View>
                   <Pressable onPress={resetPassword} style={ForgotPasswordStyles.actionButtonSignUp}>
                         <Text style={ForgotPasswordStyles.signUpText}>Reset password</Text>
                       </Pressable>
              </View>
                <Pressable onPress={goToSignUp} style={{marginTop: 50}}>
                             <Text style={ForgotPasswordStyles.createAccText}>Create an account</Text>
                         </Pressable>
                            </View>
                    </ScrollView>
                    </KeyboardAvoidingView>
     </SafeAreaView>
  )
}

