import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 8,
        height: 120,
        elevation: 8,
        marginVertical: 15,
        cursor: 'pointer',
    },
    info: {
        flex: 0.7,
        marginLeft: 20,
        marginTop: 14,
    },
    numero: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})