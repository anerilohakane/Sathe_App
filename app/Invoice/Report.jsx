import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const { width, height } = Dimensions.get("window");

export default function Report() {

    // Data for the report
    const Data = [
        { Id: "INW001", Transport: "Truck", VehicalNum: "MH1234", Driver: "Ram Singh" },
        { Id: "INW002", Transport: "Eicher", VehicalNum: "MH5678", Driver: "Vikram Jadhav" },
        { Id: "INW003", Transport: "Tempo", VehicalNum: "MH9101", Driver: "Sidharat Deshmukh" },
        { Id: "INW004", Transport: "Chota Hati", VehicalNum: "MH1213", Driver: "Anirudh Desai" },
        { Id: "INW005", Transport: "Truck", VehicalNum: "MH1415", Driver: "Jaispal Singh" },
        { Id: "INW006", Transport: "Eicher", VehicalNum: "MH2144", Driver: "Rohan Patil" },
        { Id: "INW007", Transport: "Tempo", VehicalNum: "MH4570", Driver: "Swapnil Rathod" },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(Data);

    // Handle search filtering
    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = Data.filter(
            (item) =>
                item.Transport.toLowerCase().includes(query.toLowerCase()) ||
                item.VehicalNum.toLowerCase().includes(query.toLowerCase()) ||
                item.Driver.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    // Render Item for the Header
    const renderHeaderItem = ({ item }) => (
        <View className="bg-white w-[40%] h-[45px] justify-center items-center rounded-lg shadow-md">
            <Text className="text-lg font-normal">{`${item.label}: ${item.value}`}</Text>
        </View>
    );

    // Render Item for the Sorting Buttons
    const renderSortingButton = ({ item }) => (
        <View className="bg-white w-[30%] h-[40px] justify-center items-center rounded-lg shadow-md">
            <Text className="text-lg font-normal">{item}</Text>
        </View>
    );

    // Render Item for the Table Header
    const renderTableHeader = () => (
        <View className="flex-row justify-evenly items-center px-4 py-2 bg-gray-200 rounded-t-lg shadow-md">
            <Text className="text-lg font-bold w-[25%] text-center">Inward Id</Text>
            <Text className="text-lg font-bold w-[25%] text-center">Vehicle Name</Text>
            <Text className="text-lg font-bold w-[25%] text-center">Vehicle Number</Text>
            <Text className="text-lg font-bold w-[25%] text-center">Driver Name</Text>
        </View>
    );

    // Render Item for Table Data
    const renderTableItem = ({ item }) => (
        <TouchableOpacity className="flex-row justify-evenly items-center px-4 py-2 border-b border-gray-300 bg-white rounded-lg shadow-sm">
            <Text className="text-lg w-[25%] text-center">{item.Id}</Text>
            <Text className="text-lg w-[25%] text-center">{item.Transport}</Text>
            <Text className="text-lg w-[25%] text-center">{item.VehicalNum}</Text>
            <Text className="text-lg w-[25%] text-center">{item.Driver}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            ListHeaderComponent={() => (
                <>
                    {/* Header Section */}
                    <View className="flex-row items-center justify-between px-4 py-3" style={{ backgroundColor: "#0CC0DF" }} >
                        <Image className="w-12 h-12 rounded-full" source={require("../../assets/images/1.png")} />
                        <Text className="font-semibold text-white text-3xl">Report</Text>
                        <TouchableOpacity>
                            <Icon name="menu" color="white" size={width * 0.1} />
                        </TouchableOpacity>
                    </View>

                    {/* Spacing */}
                    <View className="h-6" />

                    {/* Header Data Section */}
                    <View className="bg-gray-100 w-full h-[130px]">
                        <View className="flex-row justify-between items-center px-2 top-4 gap-2">
                            <TouchableOpacity className="bg-white justify-center items-center rounded-lg" style={{width:width*0.5, height:height*0.06}}>
                                <Text className="text-lg font-normal">Start Date:2023/01/01</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-white justify-center items-center rounded-lg" style={{width:width*0.5, height:height*0.06}}>
                                <Text className="text-lg font-normal">End Date:2023/12/31</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="px-2 top-6">
                            <TouchableOpacity className="bg-white justify-center items-center rounded-lg" style={{width:width*0.5, height:height*0.06}}>
                                <Text className="text-lg font-normal">Category:Inward</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="h-4"></View>

                    <Text className="text-2xl font-bold px-4">Inward Transport Report</Text>

                    <View className="bg-gray-100 w-full h-[80px] top-3">
                        <View className="h-2"></View>
                        <View className="flex-row justify-evenly items-center px-2 top-2 gap-2">
                            <TouchableOpacity className="bg-white justify-center items-center rounded-lg" style={{width:width*0.3, height:height*0.06}}>
                                <Text className="text-lg font-normal">Sort by Date</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-white justify-center items-center rounded-lg" style={{width:width*0.3, height:height*0.06}}>
                                <Text className="text-lg font-normal">Sort by Mode</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-white justify-center items-center rounded-lg" style={{width:width*0.3, height:height*0.06}}>
                                <Text className="text-lg font-normal">Sort by Status</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="h-3"></View>
                    {/* Table Header */}
                    {renderTableHeader()}
                </>
            )}
            data={filteredData}
            keyExtractor={(item) => item.Id}
            renderItem={renderTableItem}
            ListFooterComponent={() => (

                // Actions

                <View className="bg-gray-100 rounded-lg shadow-md">
                    <View className="h-5"></View>
                    <Text className="text-2xl font-bold text-start px-4">Action</Text>

                    {/* 1.Modify Filters */}
                    <View className='bg-white flex-row rounded-md items-center justify-start top-3 gap-2' style={{
                        width: width * 1,
                        height: height * 0.07,
                        marginBottom: 15,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 15,
                        elevation: 8,
                    }}>
                        <TouchableOpacity className="px-4">
                            <Icon name="filter-list" color="black" size={width * 0.07} />
                        </TouchableOpacity>
                        <View className="px-3 flex-row">
                            <Text className="font-bold text-xl">Modify Filters</Text>
                        </View>
                        <TouchableOpacity className="bg-slate-200 w-[40px] h-[35px] flex justify-center items-center rounded-xl" style={{ position: "absolute", right: width * 0.06 }}>
                            <Text className="text-xl items-center px-2">Go</Text>
                        </TouchableOpacity>
                    </View>

                    {/* 2.Download CSV */}
                    <View className='bg-white flex-row rounded-md items-center justify-start top-3 gap-2' style={{
                        width: width * 1,
                        height: height * 0.07,
                        marginBottom: 15,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 15,
                        elevation: 8,
                    }}>
                        <TouchableOpacity className="px-4">
                            <Icon name="download" color="black" size={width * 0.07} />
                        </TouchableOpacity>
                        <View className="px-3 flex-row">
                            <Text className="font-bold text-xl">Download CSV</Text>
                        </View>
                        <TouchableOpacity className="bg-slate-200 w-[40px] h-[35px] flex justify-center items-center rounded-xl" style={{ position: "absolute", right: width * 0.06 }}>
                            <Text className="text-xl items-center px-2">Go</Text>
                        </TouchableOpacity>
                    </View>

                    {/* 3.Download Excel */}
                    <View className='bg-white flex-row rounded-md items-center justify-start top-3 gap-2' style={{
                        width: width * 1,
                        height: height * 0.07,
                        marginBottom: 15,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 15,
                        elevation: 8,
                    }}>
                        <TouchableOpacity className="px-4">
                            <Icon name="download" color="black" size={width * 0.07} />
                        </TouchableOpacity>
                        <View className="px-3 flex-row">
                            <Text className="font-bold text-xl">Download Excel</Text>
                        </View>
                        <TouchableOpacity className="bg-slate-200 w-[40px] h-[35px] flex justify-center items-center rounded-xl" style={{ position: "absolute", right: width * 0.06 }}>
                            <Text className="text-xl items-center px-2">Go</Text>
                        </TouchableOpacity>
                    </View>

                    {/* 4.Download PDF */}
                    <View className='bg-white flex-row rounded-md items-center justify-start top-3 gap-2' style={{
                        width: width * 1,
                        height: height * 0.07,
                        marginBottom: 15,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 15,
                        elevation: 8,
                    }}>
                        <TouchableOpacity className="px-4">
                            <Icon name="download" color="black" size={width * 0.07} />
                        </TouchableOpacity>
                        <View className="px-3 flex-row">
                            <Text className="font-bold text-xl">Download PDF</Text>
                        </View>
                        <TouchableOpacity className="bg-slate-200 w-[40px] h-[35px] flex justify-center items-center rounded-xl" style={{ position: "absolute", right: width * 0.06 }}>
                            <Text className="text-xl items-center px-2">Go</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="h-10"></View>

                </View>

            )}
        />
    );
}
