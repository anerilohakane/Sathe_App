import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";

export default function Product() {
    return (
        <ScrollView>
            {/* Header Section */}
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                <Image className='w-12 h-12 rounded-full' source={require("../../assets/images/1.png")} />
                <Text className='font-semibold text-white text-3xl'>Product Details</Text>
                <Image className='w-12 h-12' source={require("../../assets/images/Menu.png")} />
            </View>


            <View className="h-10"></View>

            {/* Product Details with Images */}
            <View className='bg-slate-100 w-full h-[440px] p-4 flex rounded-lg'>

                {/* CowImage and Details */}
                <View className='bg-white w-full h-[130px] flex-row pl-4 rounded-md items-center justify-start'>
                    <Image className="" source={require('../../assets/images/CowMilk.png')} />
                    <View className="px-3 flex-col gap-1">
                        <Text className="font-bold text-2xl">Cow Milk</Text>
                        <Text className="text-xs font-extralight">Pasteurized Milk</Text>
                        <Text className="text-xs font-extralight">Usually to less than 100°C(212°F)</Text>
                    </View>
                </View>

                {/* Spacing */}
                <View className="h-3"></View>
                {/* Paneer Image and Details */}
                <View className='bg-white w-full h-[130px] flex-row pl-4 rounded-md items-center justify-start'>
                    <Image className="" source={require('../../assets/images/Paneer.png')} />
                    <View className="px-3 flex-col gap-1">
                        <Text className="font-bold text-2xl">Paneer</Text>
                        <Text className="text-xs font-extralight">Pasteurized Milk</Text>
                        <Text className="text-xs font-extralight">Usually to less than 100°C(212°F)</Text>
                    </View>
                </View>

                {/* Spacing */}
                <View className="h-3"></View>
                {/* Yoghurt Image and Details */}
                <View className='bg-white w-full h-[130px] flex-row pl-4 rounded-md items-center justify-start'>
                    <Image className="" source={require('../../assets/images/Yoghurt.png')} />
                    <View className="px-3 flex-col gap-1">
                        <Text className="font-bold text-2xl">Yoghurt</Text>
                        <Text className="text-xs font-extralight">Pasteurized Milk</Text>
                        <Text className="text-xs font-extralight">Usually to less than 100°C(212°F)</Text>
                    </View>
                </View>
            </View>

            {/* Spacing */}
            <View className="h-5"></View>
            {/* Buttons */}
            <View className='px-4 flex-row gap-2 justify-between'>
                <View className='flex-1 justify-center items-center'>
                    <TouchableOpacity
                        className='w-full h-[40px] rounded-md justify-center'
                        style={{ backgroundColor: '#0CC0DF' }}>
                  
                        <Text className='text-white font-bold text-center text-xl'>Add Vegis</Text>
                    </TouchableOpacity>
                </View>

                <View className='flex-1 justify-center items-center'>
                    <TouchableOpacity
                        className='w-full h-[40px] rounded-md justify-center'
                        style={{ backgroundColor: '#0CC0DF' }}
                    >
                        <Text className='text-white font-bold text-center text-xl'>Add Products</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Spacing */}
            <View className="h-8"></View>
            <View className="px-4 gap-10">

                <View className="flex-row justify-between pr-1">
                    <Text className="font-normal text-2xl">Total Products Available</Text>
                    <Text className="text-xl font-light">120</Text>
                </View>

                <View className="flex-row justify-between pr-1">
                    <Text className="font-normal text-2xl">Total Products out of Stock</Text>
                    <Text className="text-xl font-light">10</Text>
                </View>
            </View>
        </ScrollView>
    );
}