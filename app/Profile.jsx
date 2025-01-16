import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const { width, height } = Dimensions.get("window");

export default function Profile() {
    return (
        <ScrollView>
            {/* Header Section */}
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                <Image className='w-12 h-12 rounded-full' source={require("../assets/images/1.png")} />
                <Text className='font-semibold text-white text-3xl'>Profile</Text>
                <TouchableOpacity>
                    <Icon name="menu" color="white" size={width * 0.12} />
                </TouchableOpacity>
            </View>

            {/* Spacing */}
            <View className='h-8' />

            {/* Add Inward Details Section */}
            <View className='flex-row items-center justify-center gap-3'>
                <Text className='font-medium text-xl'>User Profile</Text>
            </View>

            <View className='h-5' />
        </ScrollView>
    );
}