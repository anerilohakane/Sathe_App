import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const { width, height } = Dimensions.get("window");

export default function Profile() {
    return (
        <>
            <View className="flex-row h-39 justify-between items-center p-2 rounded-b-lg" style={{ backgroundColor: "#0CC0DF" }}>
                <Icon name="person" size={width * 0.133} color="#FFF" />
                <Text className="text-white font-bold text-2xl">User Profile</Text>
                <TouchableOpacity>
                    <Icon name="menu" color="#FFF" size={width * 0.08} />
                </TouchableOpacity>
            </View>
            <ScrollView className="w-full">

                {/* Profile Picture Placeholder */}
                <View className=" flex-row w-full items-center justify-center">
                    <Icon name="person" size={100} color="#FFF" className="p-5 mt-5 bg-slate-200 rounded-full" />
                </View>

                {/* User Info */}
                <View className=" py-5 items-center">
                    <Text className="font-extrabold text-xl">Sairaj Patil</Text>
                    <Text>+91 8467349820</Text>
                    <Text>Admin</Text>
                </View>

                <View className="h-5"></View>

                {/* Options */}
                <View className="px-4">
                <View className="bg-white flex-row px-4 rounded-md items-center justify-start shadow-2xl" style={{ width: width * 0.9, height: height * 0.07 }}>

                    <TouchableOpacity>
                        <Icon name="settings" color="#0CC0DF" size={width * 0.07} />
                    </TouchableOpacity >
                    <View className="px-3">
                        <Text className="font-bold text-xl">Account Settings</Text>
                    </View>
                    <TouchableOpacity style={{position: "absolute", right: width * 0.01 }}>
                        <Icon name="navigate-next" color="#0CC0DF" size={width * 0.07} />
                    </TouchableOpacity>
                </View>
                

                <View className="h-5"></View>

                <View className='bg-white flex-row pl-4 rounded-md items-center justify-start shadow-2xl' style={{ width: width * 0.9, height: height * 0.07 }}>
                    <TouchableOpacity>
                        <Icon name="supervisor-account" color="#0CC0DF" size={width * 0.07} />
                    </TouchableOpacity>
                    <View className="px-3">
                        <Text className="font-bold text-xl">Manage Users</Text>
                    </View>
                    <TouchableOpacity style={{ position: "absolute",right: width * 0.01 }}>
                        <Icon name="navigate-next" color="#0CC0DF" size={width * 0.07} />
                    </TouchableOpacity>
                </View>

                <View className="h-5"></View>

                <View className='bg-white flex-row pl-4 rounded-md items-center justify-start shadow-2xl' style={{ width: width * 0.9, height: height * 0.07 }}>
                    <TouchableOpacity>
                        <Icon name="build" color="#0CC0DF" size={width * 0.07} />
                    </TouchableOpacity>
                    <View className="px-3">
                        <Text className="font-bold text-xl">Customization</Text>
                    </View>
                    <TouchableOpacity style={{position: "absolute",right: width * 0.01 }}>
                        <Icon name="navigate-next" size={width * 0.07} color="#0CC0DF" />
                    </TouchableOpacity>
                </View>
                </View>

                <View className="h-5"></View>
                {/* Buttons */}
                <View className='flex-1 justify-center items-center'>
                    <TouchableOpacity className='w-[300px] h-[48px] rounded-md justify-center mt-4' style={{ backgroundColor: '#F14C4C' }}>
                        <Text className='text-white font-bold text-center text-2xl'>Logout</Text>
                    </TouchableOpacity>
                </View>

                <View className='flex-1 justify-center items-center'>
                    <TouchableOpacity className='w-[300px] h-[48px] rounded-md justify-center mb-6 mt-4' style={{ backgroundColor: '#50C878' }}>
                        <Text className='text-white font-bold text-center text-2xl'>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
}
