import { View, Text, StyleSheet, Alert, } from "react-native"

import { Button } from "../components/button"
export default function Index(){
    function handleMassage() {
        const name = "Mohandas"
        Alert.alert(`Olá, ${name}`)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World!</Text>   
            <Button title="Continuar" onPress={handleMassage}/>                  
            <Button title="Sair" onPress={handleMassage}/>                  
                        
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        gap: 16,
    },
    title: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold",
        
    },
})