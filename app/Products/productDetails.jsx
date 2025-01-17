import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

export default function productDetails() {
    return (
        <ScrollView>
            {/* Header Section */}
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                <Image className='w-12 h-12 rounded-full' source={require("../../assets/images/1.png")} />
                <Text className='font-semibold text-white text-3xl'>Product Details</Text>
                <TouchableOpacity>
                    <Icon name="menu" color="white" size={width * 0.1} />
                </TouchableOpacity>
            </View>

            {/* Spacing */}
            <View className='h-8' />

            {/* Add Inward Details Section */}
            <View className='flex-row items-center justify-center gap-3'>
                <Image className='w-8 h-8' source={require("../../assets/images/Inscription.png")} />
                <Text className='font-medium text-xl'>Add Product Details</Text>
            </View>

            <View className='h-5' />

            {/* Form Fields */}
            <View className='px-4 py-3'>
                {[
                    { label: 'Product Name', placeholder: 'Ex. Cow Milk' },
                    { label: 'SKU Code', placeholder: 'Ex. SKU1982M26' },
                    { label: 'Category', placeholder: 'Ex. Milk' },
                    { label: 'Image', placeholder: 'Ex. Image of the Product' },
                    { label: 'Selling Price', placeholder: 'Ex. ₹50 per liter' },
                    { label: 'Quantity', placeholder: 'Ex. 95' },

                ].map((field, index) => (
                    <View className='mb-5'>
                        <Text className='text-xl font-normal mb-2'>{field.label}</Text>
                        <TextInput
                            className='border border-blue-500 p-2 rounded-lg h-[48px]'
                            placeholder={field.placeholder} />
                    </View>
                )
                )
                }

                {/* SKU Calculation */}
                <View>
                    <Text className="font-bold text-2xl mb-5">Configuration for SKU Calculation:</Text>
                    <Text className='text-xl font-normal mb-2'>Number of Pieces</Text>
                    <TextInput className='border border-blue-500 p-2 rounded-lg h-[48px] mb-5' placeholder="Ex. 10"></TextInput>

                    <Text className='text-xl font-normal mb-2'>Number of Bags</Text>
                    <TextInput className='border border-blue-500 p-2 rounded-lg h-[48px] mb-5' placeholder="Ex. 2"></TextInput>

                    <Text className='text-xl font-normal mb-2'>SKU Quantity</Text>
                    <TextInput className='border border-blue-500 p-2 rounded-lg h-[48px] mb-5' placeholder="Ex. 20"></TextInput>
                </View>


                <View className='flex-1 justify-center items-center'>
                    <TouchableOpacity className='w-[182px] h-[48px] rounded-md justify-center mb-6 mt-4' style={{ backgroundColor: '#0CC0DF' }}>
                        <Text className='text-white font-bold text-center text-3xl'>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}















































