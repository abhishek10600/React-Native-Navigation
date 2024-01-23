import { StyleSheet, View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const DetailsScreen = ({ route, navigation }) => {
    const { name, age } = route.params;
    const [count, setCount] = useState(0);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title="Count" onPress={() => setCount((c) => c + 1)} />
            )
        })
    }, [navigation])
    return (
        <View style={styles.container}>
            <Text>This is your details:</Text>
            <Text>Name:{name}</Text>
            <Text>Age:{age}</Text>
            <Text>Count:{count}</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DetailsScreen