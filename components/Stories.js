import React from 'react';
import {StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories(){
    const stories=[
      {
        id: 1,
        nome: 'Piupiu',
        src: require('../assets/Images/piupiu.png'),
      },
      {
        id: 2,
        nome: 'Frajola',
        src: require('../assets/Images/bebe_frajola.png'),
      },
      {
        id: 3,
        nome: 'Patolino',
        src: require('../assets/Images/bebe_patolino.png'),
      },
      {
        id: 4,
        nome: 'Taz',
        src: require('../assets/Images/bebe_taz.png'),
      },
      {
        id: 5,
        nome: 'Piupiu',
        src: require('../assets/Images/piupiu.png'),
      },
      {
        id: 6,
        nome: 'Frajola',
        src: require('../assets/Images/bebe_frajola.png'),
      },
      {
        id: 7,
        nome: 'Patolino',
        src: require('../assets/Images/bebe_patolino.png'),
      },
      {
        id: 8,
        nome: 'Taz',
        src: require('../assets/Images/bebe_taz.png'),
      },
    ];
    
    function renderItem({item}){
        return(
        <View style={styles.story}>
            <Image style = {styles.imgStory} source={item.src}></Image>
            <Text>{item.nome}</Text>
        </View>
        );
    }
    return(
      <View style={styles.stories}>
        <FlatList
          data={stories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}

        />
      </View>

    )
}

const styles = StyleSheet.create({
    stories:{
      flexDirection: 'row',
      height: 100,
      backgroundColor: '#fff',
    },
    story:{
      padding: 6,
      height:90,
      width:90,
      backgroundColor: '#fff',
      alignItems:'center',
    },
    imgStory:{
      width: 70,
      height: 70,
      borderRadius: 35,
    }
  });