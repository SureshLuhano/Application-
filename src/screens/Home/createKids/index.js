import { View, Text, TouchableOpacity, Image, Dimensions,TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors, Fonts } from '../../../assets/theme';

import LinearGradient from "react-native-linear-gradient"
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather"
import Modal from "react-native-modal"
import { useNavigation } from '@react-navigation/native';
const CreateKids = () => {
    const [email, setEmail] = useState()
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height
    const backArrow = require("../../../assets/Images/arrowback3.png");


console.log(email);
   
const toggleModalSec = () => {
    setModalVisible(true);
    setTimeout(() => {
     navigation.navigate("Team")
    },  2000); // Close the modal after  2 seconds
  };
  return (
   <>
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
           <View style={{backgroundColor: 'rgba(67, 59, 115, 255)',
           borderBottomRightRadius: 20,
           borderBottomLeftRadius: 20,
         flexDirection:"row",
         alignItems:"center",
         padding: 15,
         }}>
           <TouchableOpacity 
                 onPress={()=> navigation.goBack()}
                 style={styles.containerBackBtn}>
             <Image source={backArrow} style={styles.backArrow}/>
             </TouchableOpacity>
          <Text style={{fontFamily:"Now-Medium-BF6542f7137648d", color:"#fff",fontSize:18, marginLeft:8}}>Back</Text>
          </View>


          <Text style={styles.heading}>Invite Team Member</Text>
<Text style={[styles.heading, {fontSize:20}]}>Enter Email Address</Text>
<View style={{marginTop:26}}/>
<View  style={styles.inputContainer}>

<TextInput 
style={styles.input}
placeholder="Email"
selectionColor="#fff"
activeUnderlineColor="transparent"
underlineColor="transparent"
value={email}
onChangeText={setEmail}
type="email"
id="email"
name="email"
  
/>
</View>

<Text style={styles.text}>Assign Rewards</Text>

<View style={{marginLeft:22, marginTop:16, flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>

<View style={styles.radioBtnConatiner}>

<View style={styles.radioBtnConatinerInner}/>
</View>
<Text style={[styles.radioBtnText, {marginRight: windowWidth* 0.4}]}>Peace of cake</Text>
<Entypo name='cake' size={20} color="pink" style={{marginRight: windowWidth* 0.1}}/>
</View>

<View style={{marginLeft:22, marginTop:16, flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>

<View style={styles.radioBtnConatiner}>

<View style={styles.radioBtnConatinerInner}/>
</View>
<Text style={[styles.radioBtnText, {marginRight: windowWidth* 0.4}]}>1 hour of TV time</Text>
<AntDesign name="youtube" color="tomato" size={20} style={{marginRight: windowWidth* 0.1}}/>
</View>

<View style={{marginLeft:22, marginTop:16, flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>

<View style={styles.radioBtnConatiner}>

<View style={styles.radioBtnConatinerInner}/>
</View>
<Text style={[styles.radioBtnText, {marginRight: windowWidth* 0.17}]}>30 minutes of video game time</Text>
<Entypo name='game-controller' color="#fff" size={20} style={{marginRight: windowWidth* 0.1}}/>
</View>

<View style={{marginLeft:22, marginTop:16, flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>

<View style={styles.radioBtnConatiner}>

<View style={styles.radioBtnConatinerInner}/>
</View>
<Text style={[styles.radioBtnText, {marginRight: windowWidth* 0.2}]}>Donation of points to others</Text>

<Entypo name="creative-commons-noncommercial-us" color="#FFD700" size={20} style={{marginRight: windowWidth* 0.1}}/>
</View>

<TouchableOpacity 
onPress={toggleModalSec}
style={{marginTop:windowHeight* 0.22}}>
<LinearGradient colors={["#BA5DFE", "#5D36FE"]}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.linear}
>
<Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:20}}>Send Invitation</Text>
</LinearGradient>
</TouchableOpacity>


<Modal 

isVisible={modalVisible}
backdropOpacity={0.5}
// animationIn={false}
coverScreen={true}
>
<View style={styles.modalContainer}>
<View style={{alignItems:"center", justifyContent:"center",  width:50, height:50, borderRadius:50, backgroundColor:"#4EE681",}}>
<Feather name='check' size={30} color='#000'/>
</View>


<Text style={styles.modalHeading}>Invitation sent</Text>

<Text style={styles.modalText}>Invitation and rewards sent successfully</Text>
</View>

</Modal>
               </View>
               </KeyboardAwareScrollView>
               </ImageBackground>
               
               </SafeAreaView>
   </>
  )
}

export default CreateKids