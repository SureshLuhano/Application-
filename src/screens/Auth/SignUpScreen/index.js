import {
    Text, View, SafeAreaView,
    ImageBackground, ScrollView, Image, TouchableOpacity
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import styles from './styles';
import { Colors, Fonts } from '../../../assets/theme';
import Button from '../../../components/Button';
import Header from '../../../components/header';
import Radiobtns from '../../../components/Radiobtns';
import Images from '../../../assets/Images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Inputs from '../../../components/TextInput';
import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = (props) => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <Header header
                            onPress1={() => props.navigation.goBack()}
                            onPress2={() => props.navigation.navigate('Login')}
                            color={Colors.white} headtitle="Login" />
                        <View style={{ marginTop: 15 }} />
                        <View style={{ paddingHorizontal: 15 }}>
                            <ProgressBar progress={0.5} color={Colors.background.secondary} />
                        </View>
                        <View style={{ marginTop: 5 }} />
                        <Text style={[styles.headtext, {paddingLeft:15}]}>Set up your profile</Text>
                        <Text style={[styles.text, {paddingHorizontal:15}]}>Create an account so you can manage your{"\n"} 4 pillars of the family.</Text>
                      
                        <View style={{ marginTop: 10, padding: 15, }}>
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="First Name"
                                text={fname}
                                setText={setFname}
                                // secureTextEntry={true}
                                formKey="fname"
                                // style={{fontFamily:"Now-Regular-BF6542f7138c477",}}
                            />
                            <View style={{ marginTop: 15 }} />
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Last Name"
                                text={lname}
                                setText={setLname}
                                // secureTextEntry={true}
                                formKey="lname"
                            />
                            <View style={{ marginTop: 15 }} />
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Email"
                                text={email}
                                setText={setEmail}
                                // secureTextEntry={true}
                                formKey="Email"
                            />
                            <View style={{ marginTop: 15 }} />
                            <Inputs
                                // backgroundColor={}
                                borderRadius={10}
                                placeholder="Date of Birth"
                                text={dob}
                                setText={setDob}
                                // secureTextEntry={true}
                                formKey="dob"
                                color={Colors.text.secondary}
                                iconname="calendar"
                            />
                            <View style={{ marginTop: 10 }} />
                            <Inputs
                                // backgroundColor={}
                                borderRadius={10}
                                placeholder="Password"
                                text={password}
                                setText={setPassword}
                                secureTextEntry={true}
                                formKey="password"
                                color={Colors.text.secondary}
                                iconname="eye"
                            />
                            <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge,  }]}>Account Scoring Level</Text>
                            <Text style={styles.text}>This can be change in your user profile later. </Text>
                            <Radiobtns flexDirection='row' thirdbtn Easy="Easy" Medium="Medium" Second="Hard" />
                            <Text style={{color:"#A6A6A6", lineHeight:21, fontFamily:"Now-Regular-BF6542f7138c477",  fontSize: Fonts.size.normal,}}>
                            You are signing up for a 14 day trial. At anytime {"\n"}you pick a plan, refer a friend and invite family members.{"\n"}{"\n"} When you refer 2 friends that sign up you will{"\n"} receive 1 year free! Sign up is by picking a plan{"\n"} or referring a friend.
                            </Text>

                           <TouchableOpacity >
                           <LinearGradient colors={["#BA5DFE", "#5D36FE"]}
                           start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
                           style={styles.linear}
                           >
                          <Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Sign Up</Text>
                           </LinearGradient>
                           </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SignUpScreen

