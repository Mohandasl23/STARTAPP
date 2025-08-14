import { View, Text, StyleSheet, Alert, Button} from "react-native"
export default function Index(){
    function handleMassage() {
        const name = "Mohandas"
        Alert.alert(`Olá, ${name}`)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World!</Text> 
            <Button title="Enviar" onPress={handleMassage}/>          
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
    },
    title: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold",
    },
})