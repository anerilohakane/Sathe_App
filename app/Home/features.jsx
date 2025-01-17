import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const textSize = width * 0.029;

export default function Features() {
    return (
        <ScrollView>
            {/* Header Section */}
            <View style={[styles.header, styles.row]}>
                <Image style={styles.headerIcon} source={require("../../assets/images/1.png")} />
                <Text style={styles.headerTitle}>Features</Text>
                <Image style={styles.headerIcon} source={require("../../assets/images/Menu.png")} />
            </View>

            <View style={styles.spacer} />

            <View style={styles.container}>
                {[
                    {
                        count: 80,
                        label: "INWARD",
                        description: "Receive and Store Products",
                        topRightImage: require("../../assets/images/CustomsAgent.png"),
                    },
                    {
                        count: 50,
                        label: "OUTWARD",
                        description: "Dispatch Finish Goods",
                        topRightImage: require("../../assets/images/Truck.png"),
                    },
                    {
                        count: 20,
                        label: "TRANSPORT",
                        description: "Track Vehicle and Driver Information",
                        topRightImage: require("../../assets/images/3d truck.png"),
                    },
                    {
                        count: null,
                        label: "INVOICE",
                        description: "Manage Billing and Transactions",
                        leftImage: require("../../assets/images/Paper.png"),
                    },
                ].map((item, index) => (
                    <View key={index} style={styles.card}>
                        {/* Left Section */}
                        <View style={styles.leftSection}>
                            {item.count !== null ? (
                                <>
                                    <Text style={styles.count}>{item.count}</Text>
                                    <Text style={styles.countPlus}>+</Text>
                                </>
                            ) : (
                                <Image style={styles.leftImage} source={item.leftImage} className="" />
                            )}

                        </View>
                        <View style={styles.separator} />
                        {/* Middle Section */}
                        <View className="justify-items-start">
                        {/* <View style={styles.middleSection}> */}
                            <Text style={styles.cardLabel}>{item.label}</Text>
                            <Text style={styles.cardDescription}>{item.description}</Text>
                        </View>

                        {/* Top Right Image */}
                        {item.topRightImage && (
                            <Image style={styles.topRightImage} source={item.topRightImage} />
                        )}

                        {/* Bottom Right Image */}
                        <View className="rounded-tl-2xl" style={styles.bottomRightContainer}>
                            <Image
                                style={styles.bottomRightImage}
                                source={require("../../assets/images/Next.png")}
                            />
                        </View>
                    </View>
                ))}
                <View className="h-4"></View>

                <View className="pl-80 pr-80">
                    <View className="w-[369px] h-[174px] rounded-lg items-center justify-center " style={{ backgroundColor: "#00B4D8" }}>

                        <TouchableOpacity className="flex flex-row items-center justify-center gap-2 h-full w-4/5">
                            <Image source={require("../../assets/images/Product.png")}></Image>

                            <Image source={require("../../assets/images/Warehouse.png")}></Image>

                            <Image source={require("../../assets/images/Customer.png")}></Image>

                            <Image source={require("../../assets/images/Category.png")}></Image>

                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0CC0DF",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 3,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerIcon: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
    },
    headerTitle: {
        fontSize: width * 0.07,
        fontWeight: "600",
        color: "#FFF",
    },
    spacer: {
        height: height * 0.03,
    },
    container: {
        paddingHorizontal: 16,
        alignItems: "center",
    },
    card: {
        backgroundColor: "#FFF",
        width: "100%",
        height: height * 0.14,
        borderRadius: 10,
        marginVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        position: "relative",
        shadowColor: "#0CC0DF",
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        borderColor: "#F0F0F0",
        borderWidth: 1
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    count: {
        fontSize: width * 0.09,
        fontWeight: "700",
    },
    countPlus: {
        fontSize: width * 0.08,
        color: "#2196F3",
        fontWeight: "500",
    },
    leftImage: {
        width: width * 0.1,
        height: width * 0.1,
        resizeMode: "contain",
    },
    separator: {
        height: 0.8,
        backgroundColor: "#D3D3D3",
        width: width * 0.2,
        transform: [{ rotate: "90deg" }],
    },
    middleSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems:"flex-start",
        alignContent: "flex-start"
    },
    cardLabel: {
        fontSize: width * 0.06,
        fontWeight: "400",
        
    },
    cardDescription: {
        fontSize: width * 0.03,
        fontWeight: "300",
    },
    topRightImage: {
        width: width * 0.06,
        height: width * 0.06,
        position: "absolute",
        top: 8,
        right: 8,
        resizeMode: "contain",
    },
    bottomRightContainer: {
        backgroundColor: "#E0F7FA",
        width: width * 0.1,
        height: width * 0.1,
        position: "absolute",
        bottom: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    bottomRightImage: {
        width: "70%",
        height: "70%",
        resizeMode: "contain",
    },
});

