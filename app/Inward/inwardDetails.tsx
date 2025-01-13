import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";

export default function InwardDetails() {
    return (
        <ScrollView>
            {/* Header Section */}
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                <Image className='w-12 h-12 rounded-full' source={require("../../assets/images/1.png")} />
                <Text className='font-semibold text-white text-3xl'>Inward</Text>
                <Image className='w-12 h-12' source={require("../../assets/images/Menu.png")} />
            </View>

            {/* Spacing */}
            <View className='h-8' />

            {/* Add Date and Time Section */}
            <View className='flex-row items-center justify-center gap-5'>
                <Image className='w-8 h-8' source={require("../../assets/images/Time.png")} />
                <Text className='font-medium text-xl'>Date and Time</Text>
                <Text className="font-light justify-end">10:30 AM, 12 Oct 2023</Text>
            </View>

            {/* Spacing */}
            <View className='h-8' />

            {/* Milk Image */}
            <View className='flex-1 justify-center items-center'>
                <Image source={require("../../assets/images/MilkImg.png")} />
            </View>

            {/* Spacing */}
            <View className='h-5' />

            {/* Product Details */}
            <View>
                <Text className="px-4 font-bold text-3xl">Product Details :</Text>
            </View>
            <View className='h-5' />

            <View className="px-4 w-[365px] h-[72px] bg-gray-50 flex-row pl-5 gap-4 items-center justify-start ">
                <View className="bg-gray-200 w-[48px] h-[48px] p-6 rounded-lg items-center  justify-center"><Image className="absolute items-start" source={require("../../assets/images/Pen.png")}></Image>
                </View>

                <View className="flex flex-col items-start gap-3">
                    <Text className="font-medium">Milk</Text>
                    <Text className="font-light text-sm ">Batch Number : 12345</Text>
                </View>
            </View>

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
                <View key={index} className='mb-5 px-4'>
                    <Text className='text-xl font-normal mb-2'>{field.label}</Text>
                    <TextInput
                        className='border border-blue-500 p-2 rounded-lg h-[48px]'
                        placeholder={field.placeholder}
                        multiline={field.multiline || false}
                    />
                </View>
            ))}



            <View className="flex-1 justify-center items-center px-4">
                {/* Edit Details Button */}
                <TouchableOpacity className="w-full sm:w-[358px] h-[48px] rounded-md justify-center mt-4" style={{ backgroundColor: '#0CC0DF' }}>
                    <Text className="text-white font-medium text-center text-xl">Edit Details</Text>
                </TouchableOpacity>

                {/* Download Report Button */}
                <TouchableOpacity className="w-full sm:w-[358px] h-[48px] rounded-md justify-center mt-4" style={{ backgroundColor: '#FFB700' }}>
                    <Text className="text-black font-medium text-center text-xl">Download Report</Text>
                </TouchableOpacity>

                {/* Mark as Review Button */}
                <TouchableOpacity className="w-full sm:w-[358px] h-[48px] rounded-md justify-center mb-6 mt-4" style={{ backgroundColor: '#96E5D6' }}>
                    <Text className="text-black font-medium text-center text-xl">Mark as Review</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}















































