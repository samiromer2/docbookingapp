import React from 'react';
import {  Button, Text, View } from 'react-native';

export default function Homescreen ({navigation})
{
    return(
        <View style = {{ flex:1, alignItems: 'center',justifyContent:'center' }}>
            <Text>Home Screen </Text>
            <Button title = "New Tweet"
            onPress={()=> navigation.navigate('New Tweet') }/>
        </View>
    );
}