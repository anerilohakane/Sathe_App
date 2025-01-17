import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const { width, height } = Dimensions.get("window");

export default function Profile() {
    return (
        <ScrollView>
            {/* Header Section */}
            <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                <Image className='w-12 h-12 rounded-full' source={require("../../assets/images/1.png")} />
                <Text className='font-semibold text-white text-3xl'>User Profile</Text>
                <TouchableOpacity>
                    <Icon name="menu" color="white" size={width * 0.1} /> {/* Adjusted icon size */}
                </TouchableOpacity>
            </View>

            {/* Spacing */}
            <View className='h-10' />

            <View className="flex-col justify-center items-center">
                <Image style={{ width: width * 0.22, height: height * 0.1 }} source={require("../../assets/images/Profile.png")} />
            </View>

            <View className='h-8' />

            {/* User Info */}
            <View className="flex-col justify-center items-center">
                <Text className="text-2xl font-bold">Sairaj Patil</Text> {/* Wrapped within <Text> */}
                <Text className="text-sm font-light">+91 8467349820</Text> {/* Wrapped within <Text> */}
                <Text className="text-sm font-light">Admin</Text> {/* Wrapped within <Text> */}
            </View>

            <View className="h-8"></View>

            {/* Setting Option 1: Account Settings */}
            <View className='bg-white flex-row pl-4 rounded-md items-center justify-start' style={{
                width: width * 1,
                height: height * 0.07,
                marginBottom: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 15,
                elevation: 8,
            }}>
                <TouchableOpacity>
                    <Icon name="settings" color="black" size={width * 0.07} />
                </TouchableOpacity>
                <View className="px-3">
                    <Text className="font-bold text-xl">Account Settings</Text>
                </View>
                <TouchableOpacity style={{ position: "absolute", right: width * 0.01 }}>
                    <Icon name="navigate-next" color="black" size={width * 0.07} />
                </TouchableOpacity>
            </View>

            {/* Setting Option 2: Manage Users */}
            <View className='bg-white flex-row pl-4 rounded-md items-center justify-start' style={{
                width: width * 1,
                height: height * 0.07,
                marginBottom: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 15,
                elevation: 8,
            }}>
                <TouchableOpacity>
                    <Icon name="supervisor-account" color="black" size={width * 0.07} />
                </TouchableOpacity>
                <View className="px-3 flex-row">
                    <Text className="font-bold text-xl">Manage Users</Text>
                </View>
                <TouchableOpacity style={{ position: "absolute", right: width * 0.01 }}>
                    <Icon name="navigate-next" color="black" size={width * 0.07} />
                </TouchableOpacity>
            </View>

            {/* Setting Option 3: Customization and Personalization */}
            <View className='bg-white flex-row pl-4 rounded-md items-center justify-start' style={{
                width: width * 1,
                height: height * 0.07,
                marginBottom: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 15,
                elevation: 8,
            }}>
                <TouchableOpacity>
                    <Icon name="build" color="black" size={width * 0.07} />
                </TouchableOpacity>
                <View className="px-3 flex-row">
                    <Text className="font-bold text-xl">Customization and personalization</Text>
                </View>
                <TouchableOpacity style={{ position: "absolute", right: width * 0.01 }}>
                    <Icon name="navigate-next" color="black" size={width * 0.07} />
                </TouchableOpacity>
            </View>

            <View className='flex-1 justify-center items-center'>
                        <TouchableOpacity className= 'w-[300px] h-[48px] rounded-md justify-center mt-4' style={{backgroundColor: '#F14C4C'}}>
                            <Text className='text-white font-bold text-center text-2xl'>Logout</Text>
                        </TouchableOpacity>
                    </View>

                    <View className='flex-1 justify-center items-center'>
                        <TouchableOpacity className= 'w-[300px] h-[48px] rounded-md justify-center mb-6 mt-4' style={{backgroundColor: '#50C878'}}>
                            <Text className='text-white font-bold text-center text-2xl'>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
        </ScrollView>
    );
}
