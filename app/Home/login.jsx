import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const { width, height } = Dimensions.get("window");
  const [checked, setChecked] = useState(false);
  return (

    <ScrollView>

      <Image
        className="justify-center items-center"
        source={require("../../assets/images/GroupImg.png")}
        style={{ width: width, height: 350 }} />


      {/* Input Fields */}
      <View className="px-4 flex-col justify-center items-center gap-6">
        <TextInput className="pl-5 border border-cyan-500 rounded-lg py-5 w-[330px] h-[65px] text-2xl top-3" placeholder="UserName"></TextInput>
        <TextInput className="pl-5 border border-cyan-500 rounded-lg py-5 w-[330px] h-[65px] text-2xl" placeholder="Password"></TextInput>
      </View>

      {/* Eye Icon */}
      {/* Text Input with Toggling Icon */}
      <View className="px-4 flex-col justify-end items-end bottom-12 right-2">
        <TouchableOpacity className="" onPress={() => setIsVisible(!isVisible)}>
          <Icon
            name={isVisible ? "visibility" : "visibility-off"} // Icon toggles based on state
            size={24}
            color="gray" />
        </TouchableOpacity>
      </View>

      <View className="">
        {/* Checkbox Section */}
        <View className="flex-row items-center px-4">
          <TouchableOpacity
            className={`w-8 h-8 rounded-md border-2 ${checked ? "bg-cyan-500 border-cyan-500" : "border-gray-400"
              } flex items-center justify-center bottom-3`}
            onPress={() => setChecked(!checked)}
          >
            {/* Tick Icon */}
            {checked && (
              <Icon name="check" size={20} color="white" />
            )}
          </TouchableOpacity>
          </View>
        <View className="flex-row bottom-11 justify-between px-6">
          <View><Text className=" px-8 text-cyan-500 text-xl">Remember me</Text></View>
          <View><Text className="px-1 text-cyan-500 text-xl">Forgot Password...?</Text></View>
        </View>

      </View>
      <View className='flex-1 justify-center items-center'>
        <TouchableOpacity className='w-[330px] h-[65px]  rounded-md justify-center bottom-4' style={{ backgroundColor: '#0CC0DF' }}>
          <Text className='text-white font-bold text-center text-3xl'>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}