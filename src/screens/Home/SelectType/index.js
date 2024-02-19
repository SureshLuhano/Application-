import React ,{useState}from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Dimensions  } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import styles from '../SelectType/styles';
import BackArrowButton from '../../../components/BackArrowButton';
import { useSelector } from 'react-redux';
import OnBoarding from '../../Auth/Onboarding';
const windowWidth = Dimensions.get("window"). width;
const windowHeight = Dimensions.get("window"). height;


const SelectType = ({ navigation, route}) => {
const  bgImg  = require("../../../assets/Images/bg3.png");
const type = route.params?.type;
  console.log("Type: ", type);


  const navigationHande =() =>{
    const type = route.params?.type;
    console.log("Type: ", type);
    switch(type) {
         case "signin":
           navigation.navigate("Login")
           break;
         case "creataccount":
           navigation.navigate("SignUpScreen")
           break;
         default:
           alert("bug")
       }


  }

 

 
  return (
    <>
  <ImageBackground 
  style={styles.container}
  source={bgImg}>

<BackArrowButton 
onPress={()=> navigation.navigate("OnBoarding")}
/>
 
<Text style={styles.heading}>Select Type</Text>

<TouchableOpacity 
 style={styles.blurType}
 onPress={ navigationHande}
>
 <Text style={styles.text}>Parent</Text>
 <AntDesign name='arrowright' size={30} color="#fff"/>
</TouchableOpacity>


<TouchableOpacity style={[styles.blurType, {marginTop:windowHeight*0.06}]}  onPress={ navigationHande}>
<Text style={styles.text}>Child</Text>
<AntDesign name='arrowright' size={30} color="#fff"/>
</TouchableOpacity>

  </ImageBackground>
    </>
  )
}

export default SelectType;
