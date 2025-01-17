import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons


export default function InwardDetails() {
    return (
        <ScrollView>
            {/* Header Section */}
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                <Image className='w-12 h-12 rounded-full' source={require("../../assets/images/1.png")} />
                <Text className='font-semibold text-white text-3xl'>Inward</Text>
                <TouchableOpacity>
                    <Icon name="menu" color="white" size={width * 0.1} />
                </TouchableOpacity>
            </View>

            {/* Spacing */}
            <View className='h-8' />

            {/* Add Inward Details Section */}
            <View className='flex-row items-center justify-center gap-3'>
                <Image className='w-8 h-8' source={require("../../assets/images/Inscription.png")} />
                <Text className='font-medium text-xl'>Add Inward Details</Text>
            </View>

            <View className='h-5' />

            {/* Form Fields */}
            {[
                { label: 'Source', placeholder: '' },
                { label: 'Destination', placeholder: 'Ex. Warehouse A' },
                { label: 'Category', placeholder: 'Ex. Purchased' },
                { label: 'Warehouse', placeholder: 'Ex. Central Depot' },
                { label: 'Vehicle Number', placeholder: 'Ex. MH 12 AD 1236' },
                { label: 'Mobile Number', placeholder: 'Ex. 9595652525' },
                { label: 'SKU', placeholder: 'Ex. SKU1236' },
                { label: 'Quantity In Bags/Cases', placeholder: 'Ex. 95' },
                { label: 'Quantity in kg', placeholder: 'Ex. 55000' },
                { label: 'Rate', placeholder: 'Ex. 60000' },
                { label: 'Amount', placeholder: 'Ex. 764000' },
                { label: 'Date', placeholder: '12/12/2023' },
                { label: 'Supplier Contact Number', placeholder: 'Ex. 7984527457' },
                { label: 'Invoice ID', placeholder: 'Ex. 1250' },
                { label: 'Remark/Notes', placeholder: '', multiline: true }
            ].map((field, index) => (
                <View className='mb-5 px-4'>
                    <Text className='text-xl font-normal mb-2'>{field.label}</Text>
                    <TextInput
                        className='border border-blue-500 p-2 rounded-lg h-[48px]'
                        placeholder={field.placeholder}
                        multiline={field.multiline || false}
                    />
                </View>
            )
            )
            }


            <View className='flex-1 justify-center items-center'>
                <TouchableOpacity className='w-[182px] h-[48px] rounded-md justify-center mb-6 mt-4' style={{ backgroundColor: '#0CC0DF' }}>
                    <Text className='text-white font-bold text-center text-3xl'>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}















































