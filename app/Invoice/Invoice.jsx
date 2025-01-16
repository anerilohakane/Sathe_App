import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; 
import Icon1 from "react-native-vector-icons/FontAwesome"; 

const { width, height } = Dimensions.get("window");

export default function Invoice() {
    return (
        <ScrollView>
            {/* Header Section */}
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }}>
                <Image className='rounded-full' style={{ width: width * 0.15, height: width * 0.15 }} source={require("../../assets/images/1.png")} />
                <Text className='font-semibold text-white' style={{ fontSize: width * 0.08 }}>Invoice</Text>
                <Image style={{ width: width * 0.12, height: width * 0.12 }} source={require("../../assets/images/Menu.png")} />
            </View>

            {/* Common Style for Sections */}
            {[
                { label: "Invoice Id", value: "INV-20231" },
                { label: "Date", value: "2023/10/01" },
                { label: "Source Location", value: "Mumbai" },
                { label: "Destination Location", value: "Pune" },
                { label: "Category", value: "Outward" },
                { label: "Warehouse", value: "Warehouse" },
                { label: "Vehicle Number", value: "MH12AB12" },
                { label: "Driver Name", value: "Sidharth Deshmukh" },
                { label: "Quantity", value: "500 liters" },
                { label: "Rate", value: "₹ 50/liter" },
                { label: "Total Amount", value: "₹ 25,000" },
                { label: "Payment Status", value: "Paid" },
                { label: "Remarks", value: "Delivered" },
            ].map((item, index) => (
                <View
                    key={index}
                    className='bg-white flex-row rounded-md items-center justify-between top-3 gap-4'
                    style={{
                        width: "90%",
                        height: height * 0.08,
                        marginBottom: height * 0.02,
                        marginHorizontal: "5%",
                        paddingHorizontal: "5%",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 15,
                        elevation: 8,
                    }}>
                    <Text className="font-bold" style={{ fontSize: width * 0.045 }}>{item.label}</Text>
                    <Text className="font-normal" style={{ fontSize: width * 0.04 }}>{item.value}</Text>
                </View>
            ))}

            <View className="h-10"></View>

            <Text className="text-2xl font-bold px-6" style={{ fontSize: width * 0.06 }}>Product Details</Text>
            <View className="h-5"></View>
            <View style={{ height: height * 0.01 }}></View>

            <View
                className="bg-white flex-row rounded-md items-center justify-between"
                style={{
                    width: "90%",
                    height: height * 0.08,
                    marginBottom: height * 0.02,
                    marginHorizontal: "5%",
                    paddingHorizontal: "5%",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.25,
                    shadowRadius: 15,
                    elevation: 8,
                }}>

                <Text className="font-medium" style={{ fontSize: width * 0.045 }}>Cow Milk</Text>
                <Text className="font-normal" style={{ fontSize: width * 0.04 }}>₹ 15,000</Text>
            </View>

            <View
                className="bg-white flex-row rounded-md items-center justify-between"
                style={{
                    width: "90%",
                    height: height * 0.08,
                    marginBottom: height * 0.02,
                    marginHorizontal: "5%",
                    paddingHorizontal: "5%",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.25,
                    shadowRadius: 15,
                    elevation: 8,
                }}
            >
                <Text className="font-medium" style={{ fontSize: width * 0.045 }}>Buffalo Milk</Text>
                <Text className="font-normal" style={{ fontSize: width * 0.04 }}>₹ 10,000</Text>
            </View>

            <View
                className="bg-white flex-row rounded-md items-center justify-between"
                style={{
                    width: "90%",
                    height: height * 0.08,
                    marginBottom: height * 0.02,
                    marginHorizontal: "5%",
                    paddingHorizontal: "5%",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.25,
                    shadowRadius: 15,
                    elevation: 8,
                }}>
            
                <Text className="font-medium" style={{ fontSize: width * 0.045 }}>Total</Text>
                <Text className="font-normal" style={{ fontSize: width * 0.04 }}>₹ 25,000</Text>
            </View>

            <View style={{ height: height * 0.03 }}></View>

            <View
    className="flex-row rounded-md items-center justify-start"
    style={{
        width: "90%",
        height: height * 0.08,
        marginBottom: height * 0.02,
        marginHorizontal: "5%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 8,
        backgroundColor: "#4D63F5",
    }}
>
    <TouchableOpacity style={{ paddingHorizontal: width * 0.03}}>
        <Icon name="download" color="white" size={width * 0.08} />
    </TouchableOpacity>
    <View style={{ flex: 1, paddingHorizontal: width * 0.02 }}>
        <Text style={{ fontSize: width * 0.05, fontWeight: "bold", color: "white" }}>Download this Invoice</Text>
    </View>
</View>

<View
    className="flex-row rounded-md items-center justify-start"
    style={{
        width: "90%",
        height: height * 0.08,
        marginBottom: height * 0.02,
        marginHorizontal: "5%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 8,
        backgroundColor: "#4D63F5",
    }}>

    <TouchableOpacity style={{ paddingHorizontal: width * 0.03 }}>
        <Icon1 name="whatsapp" color="white" size={width * 0.08} />
    </TouchableOpacity>
    <View style={{ flex: 1, paddingHorizontal: width * 0.02 }}>
        <Text style={{ fontSize: width * 0.05,fontWeight: "bold", color: "white" }}>Share on WhatsApp</Text>
    </View>
</View>

        </ScrollView>
    );
}
