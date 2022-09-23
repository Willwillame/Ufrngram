import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Stories from '../components/Stories';

export default function Feed(){
    const feed = [
        {
            id: 1,
            nome: 'Taz',
            imgPerfil: require('../assets/Images/bebe_taz.png'),
            imgPost: require('../assets/Images/baby_looney_toones.png'),
            aspectRatio: 1.776,
        },
        {
            id: 2,
            nome: 'Frajola',
            imgPerfil: require('../assets/Images/bebe_frajola.png'),
            imgPost: require('../assets/Images/post_frajola.png'),
            aspectRatio: 1,
        },
        {
            id: 3,
            nome: 'Piupiu',
            imgPerfil: require('../assets/Images/piupiu.png'),
            imgPost: require('../assets/Images/post_piupiu.png'),
            aspectRatio: 0.914,
        },
        {
            id: 4,
            nome: 'Patolino',
            imgPerfil: require('../assets/Images/bebe_patolino.png'),
            imgPost: require('../assets/Images/post_patolino.png'),
            aspectRatio: 1,
        }
    ];

    function renderItem({item, index}){
        return(
        <View style={styles.post}>
          <Stories/>    
          <View style={styles.posthead}>
            <View style={styles.postHeadLeft}>
            <Image style={styles.postHeadImg} source={item.imgPerfil}/>
            <Text>{item.nome}</Text>
            </View>
            <FontAwesome5 name='ellipsis-h' size={16} color= 'black'/>
          </View>
          <View>
          <Image style={styles.postImg} aspectRatio={item.aspectRatio} source={item.imgPost}/>
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
  