import React from 'react';
import {  Text, View } from 'react-native';

export default function NewTweet ()
{
    return(
        <View style = {{ flex:1, alignItems: 'center',justifyContent:'center' }}>
            <Text>Please type something to start seeking</Text>
        </View>
    );
}