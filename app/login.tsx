import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Login(){
  const [isVisible, setIsVisible] = useState(false);
  return(

    <View>
      {/* Top Image and Icon */}
      <View className="w-auto h-12" style={{ backgroundColor: "#0CC0DF" }}>
        <View className="w-[328px] h-[365px] flex justify-center items-center">
          <Image source={require("../assets/images/Group.png")}></Image>
        </View>

        <View className="flex-col justify-center top-16 px-28 absolute ">
          <Image className="w-40 h-40 rounded-full" source={require("../assets/images/1.png")}></Image>
        </View>
      </View>

      {/* Input Fields */}
      <View className="px-4 flex-col justify-center items-center gap-6">
        <TextInput className="border border-cyan-500 rounded-lg py-5 w-[330px] h-[65px] text-2xl top-96" placeholder="UserName"></TextInput>
        <TextInput className="border border-cyan-500 rounded-lg py-5 w-[330px] h-[65px] text-2xl top-96" placeholder="Password"></TextInput>
      </View>

      {/* Eye Icon */}
      <View className="h-4"></View>
      {/* Text Input with Toggling Icon */}
      <View className="px-4 flex-col justify-end items-end top-80 right-2">
        <TouchableOpacity className="" onPress={() => setIsVisible(!isVisible)}>
          <Icon
            name={isVisible ? "visibility" : "visibility-off"} // Icon toggles based on state
            size={24}
            color="gray" />
        </TouchableOpacity>
      </View>

      <View className="flex-col justify-end items-start px-4 bottom-8">
                <View className="border border-slate-400 w-6 h-6 rounded-md top-96"></View>
                <View className="flex-row bottom-7">
                <Text className=" px-8 text-cyan-500 top-96 text-xl">Remember me</Text>
                <Text className="px-1 text-cyan-500 top-96 text-xl">Forgot Password...?</Text>
                </View>

                <View className='flex-1 justify-center items-center'>
                            <TouchableOpacity className= 'w-[366px] h-[78px] rounded-md justify-center' style={{backgroundColor: '#0CC0DF'}}>
                                <Text className='text-white font-bold text-center text-3xl'>Login</Text>
                            </TouchableOpacity>
                        </View>
            </View>
    </View>
  );
}

