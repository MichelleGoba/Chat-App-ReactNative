import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Button } from 'react-native';

const Login = () => {
  return (
    <View style={{flex:1, backgroundColor:"pinknp", padding:10, alignItems:"center"}}>
      <KeyboardAvoidingView>
        <View style={{marginTop:70, height:900, width:1300, backgroundColor:"grey",borderRadius:20}}>
          <Text style={{color:"navy", fontSize:50, fontWeight:600, textAlign:"center", marginTop:20}}>Chat App</Text>
          {/* <Button title="Log in" onPress={() => console.log("Button pressed")}></Button>
          <Button>Sign in</Button> */}

        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})