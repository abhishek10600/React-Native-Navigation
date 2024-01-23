import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = ({ route, navigation }) => {
    const { name, age } = route.params;
    return (
        <SafeAreaView>
            <View className="">
                <Text className="text-xl font-bold">Profile of {name}</Text>
                <Button title="Home" onPress={() => navigation.navigate("Home")} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen