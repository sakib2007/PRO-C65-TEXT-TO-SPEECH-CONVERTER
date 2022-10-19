import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text:''
    }
  }

  speak =()=> {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  };
  render() {
    return(
      
      <View style={styles.container}>
       <TextInput style={styles.inputBox}
        onChangeText={text => {
          this.setState({ text: text })
        }}
        value={this.state.text}
        placeholder='Type Your Text Here'
       />
       <TouchableOpacity style = {styles.searchButton} onPress={this.speak}>
       <Text style = {{fontSize:18, color:'white'}}>Click Here to Hear</Text>
      </TouchableOpacity>
      
     <h5>download my text to speech app in desktop(pc) <a href = "https://drive.google.com/file/d/1pjq4leZMaj1yU9oHaqvomoFdYN6O8_lQ/view?usp=sharing">click here</a>not avabile for mobile.please check and follow my<a href ="https://github.com/abhinavdatta"> github page.</a>if you are using my open source as your project please mention my name in your project thankyou</h5>

<h6>this program only works on website only not on mobile because ot says error and i dont know how to fix it</h6>
      </View> 

     
        
    );
  }
}

const styles=StyleSheet.create( {
  container:{
    flex:1,
    backgroundColor:'#1AB7EA'
  },
  searchButton:{
    alignSelf:'center',
    backgroundColor:'#3C288A',
    borderRadius:100,
    borderWidth:3,
    borderColor:'lightgreen',
    alignItems:'center',
    justifyContent:'center',
    height:90,
    width:180,
    marginTop:10, 
    marginLeft:2
  },
  inputBox:{
    marginTop:100,
    alignSelf:'center',
    textAlign:'center',
    fontSize:20,
    borderColor:'#BD708B',
    borderRadius:10,
    borderWidth:3,
    height:50,
    width:300
    
  }
})