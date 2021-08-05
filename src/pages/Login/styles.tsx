import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  
  container: {
    flex:1,
    justifyContent:"flex-end",
  },
  titleContainer:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",    
  },
  title:{
    color:"#ddd",
    textTransform:"uppercase",
    fontWeight:"bold",
    fontSize:32
  },
  backgroundImage:{
    width:"100%",
    height:"100%",
    justifyContent: "center",
    backgroundColor:"#578DC2"
  },
  text:{
    color:Colors.white,
    fontWeight:"bold",
    textTransform:"uppercase",
    fontFamily:"Montserrat-SemiBold"
  },
  loginCorp:{    
    backgroundColor:"#0C2944",
    alignItems:"center",
    justifyContent:"center",
    height:80,
    borderTopLeftRadius:80,

  },
  loginNormal:{
    backgroundColor:"#0000FF",
    alignItems:"center",
    justifyContent:"center",
    height:80,
    borderTopLeftRadius:80,
  },
  loginNormalBox:{
    backgroundColor:"#0C2944"
  }
});
export default styles