import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

export default function UpdateWarehouse(){
    return(
        <ScrollView>
               <View className='flex-row rounded-md items-center justify-between px-4 py-3' style={{ backgroundColor: "#0CC0DF" }} >
                          <Image className='w-12 h-12 rounded-full' source={require("../../assets/images/1.png")} />
                          <Text className='font-semibold text-white text-3xl'>Warehouse</Text>
                          <Image className='w-12 h-12' source={require("../../assets/images/Menu.png")} />
                      </View>
          
                      {/* Spacing */}
                      <View className='h-8' />
          
                      {/* Add Inward Details Section */}
                      <View className='flex-row items-center justify-center gap-3'>
                          <Image className='w-8 h-8' source={require("../../assets/images/Inscription.png")} />
                          <Text className='font-medium text-xl'>Update Warehouse Details</Text>
                      </View>

                    {/* Spacing */}
                    <View className="h-8"></View>
                       {[
                                      { label: 'Warehouse Name', placeholder: 'WH003' },
                                      { label: 'Warehouse Location', placeholder: 'West road' },
                                      { label: 'Warehouse Capacity of Storage', placeholder: 'Ex. 80,000 square feet' },
                                  ].map((field, index) => (
                                      <View key={index} className='mb-5 px-4'>
                                          <Text className='text-xl font-normal mb-2'>{field.label}</Text>
                                          <TextInput
                                              className='border border-blue-500 p-2 rounded-lg h-[48px]'
                                              placeholder={field.placeholder}
                                          />
                                      </View>
                                  ))}

                                   <View className='flex-1 justify-center items-center'>
                                                  <TouchableOpacity className='w-[182px] h-[48px] rounded-md justify-center mb-6 mt-4' style={{ backgroundColor: '#0CC0DF' }}>
                                                      <Text className='text-white font-bold text-center text-3xl'>Submit</Text>
                                                  </TouchableOpacity>
                                              </View>
                      
        </ScrollView>
    );
}