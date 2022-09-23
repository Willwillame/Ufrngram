import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header(){
    return(
      <View style={styles.header}>
        <Image style = {styles.ufrngram} source={require('../assets/Images/ufrngram.png')}></Image>
        <FontAwesome5 name='envelope' size={24} color= 'black'/>
      </View>
    );
}

const styles = StyleSheet.create({
   
    header:{
      padding: 10,
      flexDirection: 'row',
      height:50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'space-between',
    },
    ufrngram:{
      width: 110,
      height: 25,
    }
  });
  
