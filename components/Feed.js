import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Stories from '../components/Stories';

export default function Feed(){
  const [feed, setFeed] = useState([]);

  useEffect(function(){
    async function getData(){
      const response = await fetch('https://mobile.ect.ufrn.br:3000/feed');
      const feedServidor = await response.json();
      setFeed(feedServidor)
    }
    getData();

  }, [])

    function renderItem({item, index}){
        return(
        <View style={styles.post}>
          {index === 0 && <Stories/>}    
          <View style={styles.posthead}>
            <View style={styles.postHeadLeft}>
            <Image style={styles.postHeadImg} source={{uri: item.imgPerfilUri}}/>
            <Text>{item.nomeUsuario}</Text>
            </View>
            <FontAwesome5 name='ellipsis-h' size={16} color= 'black'/>
          </View>
          <View>
          <Image style={styles.postImg} aspectRatio={item.aspectRatio} source={{uri: item.imgPostUri}}/>
          </View>
          <View style={styles.postFoot}>
            <View style={styles.postFootLeft}>
              <FontAwesome5 style={styles.postFootIcon} name='heart' size={24} color= 'black'/>
              <FontAwesome5 style={styles.postFootIcon} name='comment' size={24} color= 'black'/>
              <FontAwesome5 style={styles.postFootIcon} name='paper-plane' size={21} color= 'black'/>
            </View>
            <View style={styles.postFootRight}>
              <FontAwesome5 style={styles.postFootIcon} name='bookmark' size={22} color= 'black'/>
            </View>

          </View>
        </View>

        )
    }


    return(
      <View style={styles.feed}>
        <FlatList
          data = {feed}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        
      </View>
    )
}

const styles = StyleSheet.create({
    feed:{
      marginTop:10,
      flex: 1,
      backgroundColor: 'white',
    },
    post: {
      
      backgroundColor: 'white',
    },
    posthead: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 60,
      padding: 6,
    },
    postHeadLeft:{
      alignItems: 'center',
      flexDirection: 'row',
      
    },
    postHeadImg:{
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 5,
    },
    postImg:{
      width:'100%',
      height: undefined,
    },
    postFoot:{
      height:60,
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    postFootLeft:{
      marginTop:5,
      flexDirection:'row',
      marginLeft: 10,
    },
    postFootIcon:{
      marginRight: 10,
    },
    postFootRight:{
      marginRight:10,
      marginTop:5,
      marginLeft: 225,
  
    }
  });
  