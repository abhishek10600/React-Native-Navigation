import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View className="flex">
                <Text className="text-2xl font-bold px-4">Home</Text>
                <TouchableOpacity className="bg-red-500 flex justify-center items-center mx-2 py-2 my-2" onPress={() => navigation.navigate("Profile", {
                    name: "Abhishek Sharma",
                    age: 23
                })}>
                    <Text className="text-white">Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default HomeScreen