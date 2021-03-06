import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    },
    image:{
        width: 150,
        height: 250,
        resizeMode: "cover",
        borderRadius: 10,
        margin: 5
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default styles;
