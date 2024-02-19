import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        // background: Colors.background.primary,
    },
    text: {
        fontSize: Fonts.size.normal,
        color: Colors.gary9,
        lineHeight: 22,
        marginVertical:16,
        fontFamily:"Now-Regular-BF6542f7138c477",
    },
    headtext: {
        // paddingLeft: 12,
        fontSize: Fonts.size.xxxLarge,
        color: Colors.text.tertiary,
        // paddingVertical: 5
        // marginVertical:16
        marginTop:16,
        fontFamily:"Now-Medium-BF6542f7137648d",
    },
    CameraView: {
        marginTop: 15,
        // backgroundColor: 'green',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    camerIcon: {
        width: 80,
        height: 80,
        borderWidth: 1, borderColor: Colors.white,
        padding: 15, borderRadius: 100,
        justifyContent: 'center', alignItems: 'center'
    },
    picturetext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xSmall,
        color: Colors.white
    },

    linear:{
        width:"90%",
        paddingVertical:16,
        marginVertical:28,
        borderRadius:8,
        alignSelf:"center"
            }

})