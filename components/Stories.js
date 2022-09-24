import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories(){
    const [stories, setStories] = useState([]);

    useEffect(function(){
      async function getData(){
        const response = await fetch('https://mobile.ect.ufrn.br:3000/stories');
        const storiesServidor = await response.json();
        setStories(storiesServidor)
      }
      getData();

    }, [])

    
    function renderItem({item}){
        return(
        <View style={styles.story}>
            <Image style = {styles.imgStory} source={{uri: item.imgPerfilUri }}></Image>
            <Text>{item.nomeUsuario}</Text>
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