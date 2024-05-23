import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Star from '../assets/icons/star';
import Download from '../assets/icons/download';

const MiniCard = ({Name,source}) => {
  return (
    <View style={tw`w-full h-[150px] bg-blue-300 p-3 rounded-xl flex-row justify-between items-center mb-3`}>
    <Image source={source} style={tw`h-30 w-30 rounded-xl`}/>
    <View style={tw`w-[100px] flex-col gap-2`}>
        <Text style={tw`text-2xl`}>{Name}</Text>
        <View style={tw`flex-row gap-3`}>
        <View style={tw`flex-row items-center gap-2`}>
        <Star/>
        <Text style={tw`text-white`}>4.5</Text>
    </View>
        <View style={tw`flex-row items-center gap-2`}>
            <Download/>
        <Text style={tw`text-white`}>10M</Text>
    </View>
    </View>
    </View>
    <Text style={tw`bg-blue-500 p-3 px-5 text-white rounded-xl`}>button</Text>
        </View>
  )
}

export default MiniCard

const styles = StyleSheet.create({})