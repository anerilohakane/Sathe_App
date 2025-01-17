import React from "react";
import { View, Text, FlatList, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons
import Icon1 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/FontAwesome6";

const { width, height } = Dimensions.get("window");

export default function SatheInvoice() {
    const Data = [
        { Product: "Milk", Quantity: "100", Bags: "10", Rate: "₹5000" },
        { Product: "Paneer", Quantity: "50", Bags: "5", Rate: "₹4000" },
        { Product: "Cheese", Quantity: "120", Bags: "10", Rate: "₹7000" },
        { Product: "Ghee", Quantity: "100", Bags: "19", Rate: "₹20,000" },
        { Product: "Yogurt", Quantity: "150", Bags: "20", Rate: "₹9000" },
        { Product: "Milk", Quantity: "200", Bags: "20", Rate: "₹10,000" },
        { Product: "Ghee", Quantity: "80", Bags: "14", Rate: "₹15,000" },
    ];

    // Header Section component
    const HeaderSection = () => (
        <>
            <View style={{ height: height * 0.04 }}></View>
            <View className="flex-row items-center justify-center gap-3">
                <TouchableOpacity>
                    <Icon name="article" color="black" size={width * 0.1} />
                </TouchableOpacity>
                <Text className="font-bold text-2xl">Sathe Doodh Dairy Invoice</Text>
            </View>

            <View className="h-5"></View>

            <View className="bg-gray-100 w-full h-[130px]">
                <View className="flex-row justify-evenly items-center px-2 top-4 gap-2">
                    <TouchableOpacity className="bg-white justify-center items-start rounded-lg px-4" style={{ width: width * 0.4, height: height * 0.12 }}>
                        <Icon name="article" color="black" size={width * 0.08} />
                        <Text className="text-lg font-medium">Invoice</Text>
                        <Text className="text-base font-light">INv12345</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white justify-center items-start rounded-lg px-4" style={{ width: width * 0.4, height: height * 0.12 }}>
                        <Icon name="calendar-today" color="black" size={width * 0.07} />
                        <Text className="text-lg font-medium">Date</Text>
                        <Text className="text-base font-light">2023/12/31</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text className="text-2xl font-bold px-8">Transaction Details</Text>
            <View className="h-5"></View>

            <View className="bg-white flex-row rounded-md items-center justify-between"
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
                <Text className="font-medium" style={{ fontSize: width * 0.045 }}>Vehicle Number</Text>
                <Text className="font-normal" style={{ fontSize: width * 0.04 }}>MH12AB12</Text>
            </View>

            <View className="bg-white flex-row rounded-md items-center justify-between"
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
                <Text className="font-medium" style={{ fontSize: width * 0.045 }}>Driver Name</Text>
                <Text className="font-normal" style={{ fontSize: width * 0.04 }}>Vikram Jadhav</Text>
            </View>

            <View className="bg-white flex-row rounded-md items-center justify-between"
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
                <Text className="font-medium" style={{ fontSize: width * 0.045 }}>Contact Number</Text>
                <Text className="font-normal" style={{ fontSize: width * 0.04 }}>9763425638</Text>
            </View>

            <View style={{ height: height * 0.02 }}></View>

            <Text className="text-2xl font-bold px-6">Product Details</Text>
            <View className="h-5"></View>

            {/* Table Headers */}
            <View className="flex-row justify-between items-center bg-gray-300 py-3 px-6">
                <Text className="font-bold" style={{ width: "25%" }}>Product</Text>
                <Text className="font-bold" style={{ width: "25%", textAlign: "center" }}>Quantity</Text>
                <Text className="font-bold" style={{ width: "25%", textAlign: "center" }}>Bags</Text>
                <Text className="font-bold" style={{ width: "25%", textAlign: "right" }}>Rate</Text>
            </View>
        </>
    );

    // Product List Item
    const ProductItem = ({ item }) => (
        <View className="flex-row justify-between items-center bg-white py-3 px-6 border-b border-gray-200">
            <Text className="font-medium" style={{ width: "25%" }}>{item.Product}</Text>
            <Text className="font-medium" style={{ width: "25%", textAlign: "center" }}>{item.Quantity}</Text>
            <Text className="font-medium" style={{ width: "25%", textAlign: "center" }}>{item.Bags}</Text>
            <Text className="font-medium" style={{ width: "25%", textAlign: "right" }}>{item.Rate}</Text>
        </View>
    );

    return (
        <FlatList
            ListHeaderComponent={HeaderSection}
            data={Data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ProductItem item={item} />}
            ListFooterComponent={
                <View style={{ backgroundColor: "#f8f8f8" }}>
                    <View className="h-6"></View>
                    <Text className=" px-6 text-2xl font-semibold">Financial Summary</Text>
                    <View className="h-6"></View>
                    <View className="bg-white flex-row rounded-md items-center justify-between"
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
                        <Text className="font-medium" style={{ fontSize: width * 0.045 }}>Milk</Text>
                        <Text className="font-normal" style={{ fontSize: width * 0.04 }}>₹5,00,000</Text>
                    </View>

                    <View className="bg-white flex-row rounded-md items-center justify-between"
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
                        <Text className="font-medium" style={{ fontSize: width * 0.045 }}>Butter</Text>
                        <Text className="font-normal" style={{ fontSize: width * 0.04 }}>₹5,00,000</Text>
                    </View>

                    <View className="bg-white flex-row rounded-md items-center justify-between"
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
                        <Text className="font-normal" style={{ fontSize: width * 0.04 }}>₹10,00,000</Text>
                    </View>
                    <View className="h-5"></View>
                    <View>
                        <Text className="text-2xl font-semibold px-6">Remarks</Text>
                        <Text className="px-6 text-base font-medium top-4">Please ensure the quality of the products is maintained during transportation. Contact the warehouse manager for any discrepancies.</Text>
                    </View>
                    <View className="h-10"></View>
                    <View className="flex-row justify-center items-center gap-3">
                        <TouchableOpacity className="flex justify-center items-center">
                            <Icon name="facebook" color="black" size={width * 0.12} />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex justify-center items-center">
                            <Icon3 name="x-twitter" color="black" size={width * 0.1} />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex justify-center items-center">
                            <Icon1 name="instagram-with-circle" color="black" size={width * 0.1} />
                        </TouchableOpacity>
                    </View>

                    <View className="h-5"></View>
                    <TouchableOpacity className="flex-row justify-center items-center px-10 gap-2">
                            <Icon name="copyright" color="black" size={width * 0.06} />
                            <Text className="text-base font-medium">2023 Sathe Doodh Dairy. All rights reserved.</Text>
                            
                        </TouchableOpacity>
                    
                    <View className="h-20"></View>
                </View>
            }
        />
    );
}