import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";

export default function Outward() {
    return (
        <ScrollView>
            {/* Header Section */}
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                <Image className='w-12 h-12 rounded-full' source={require("../../assets/images/1.png")} />
                <Text className='font-semibold text-white text-3xl'>Outward</Text>
                <Image className='w-12 h-12' source={require("../../assets/images/Menu.png")} />
            </View>

            {/* Spacing */}
            <View className='h-8' />

            {/* Add Inward Details Section */}
            <View className='flex-row items-center justify-center gap-3'>
                <Image className='w-8 h-8' source={require("../../assets/images/Inscription.png")} />
                <Text className='font-medium text-xl'>Add Outward Details</Text>
            </View>

            <View className='h-5' />

            {/* Form Fields */}
            {[
                { label: 'Category', placeholder: 'Ex. Purchased' },
                { label: 'SKU', placeholder: 'Ex. SKU1236' },
                { label: 'Rate', placeholder: 'Ex. 50000' },
                { label: 'Quantity in kg', placeholder: 'Ex. 1200' },
                { label: 'Total', placeholder: 'Ex. 12000' },
                { label: 'Vehicle Number', placeholder: 'Ex. MH 14 BB 7899' },
                { label: 'Payment Type', placeholder: 'Ex. Cash' },
                { label: 'Outstanding Amount', placeholder: 'Ex. 15000' },
                { label: 'Source' },
                { label: 'Destination' },
            ].map((field, index) => (
                <View key={index} className='mb-5 px-4'>
                    <Text className='text-xl font-normal mb-2'>{field.label}</Text>
                    <TextInput
                        className='border border-blue-500 p-2 rounded-lg h-[48px]'
                        placeholder={field.placeholder}
                    />
                </View>
            ))}

            {/* Driver and customer Details */}
            <View>
                <Text className="font-bold text-2xl mb-5">Driver Information :</Text>
                <Text className='text-xl font-normal mb-2'>Driver Name</Text>
                <TextInput className='border border-blue-500 p-2 rounded-lg h-[48px] mb-5' placeholder="Ex. Anirudha Kulkarni"></TextInput>

                <Text className='text-xl font-normal mb-2'>Driver Contact Number</Text>
                <TextInput className='border border-blue-500 p-2 rounded-lg h-[48px] mb-5' placeholder="Ex. 9324537480"></TextInput>

                <Text className="font-bold text-2xl mb-5">Customer Information :</Text>
                <Text className='text-xl font-normal mb-2'>Customer Name</Text>
                <TextInput className='border border-blue-500 p-2 rounded-lg h-[48px] mb-5' placeholder="Ex. Vikram Jadhav"></TextInput>

                <Text className='text-xl font-normal mb-2'>Customer Contact Number</Text>
                <TextInput className='border border-blue-500 p-2 rounded-lg h-[48px] mb-5' placeholder="Ex. 7789553429"></TextInput>

                <Text className='text-xl font-normal mb-2'>Customer Address</Text>
                <TextInput className='border border-blue-500 p-2 rounded-lg h-[48px] mb-5' placeholder="Ex. Shrirampur, Ahemadnagar"></TextInput>
            </View>


            <View className='flex-1 justify-center items-center'>
                <TouchableOpacity className='w-[182px] h-[48px] rounded-md justify-center mb-6 mt-4' style={{ backgroundColor: '#0CC0DF' }}>
                    <Text className='text-white font-bold text-center text-3xl'>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}















































