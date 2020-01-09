import React, { useState } from 'react';
import { Modal, AsyncStorage, Alert, SafeAreaView, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native';

import api from '../services/api';

export default function Book({ navigation }){
    const [date, setDate] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: {
                user_id
            }
        })

        Alert.alert('Sua reserva foi solicitada!');
        navigation.navigate('List');
    }

    function switchPage(){
        navigation.navigate('List');
    }

    return (
        <Modal>
            <SafeAreaView style={styles.container}>
                <Text style={styles.label}>DATA DE INTERESSE *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Qual data você quer reservar?"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={date}
                    onChangeText={setDate}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Solicitar reserva</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.cancelButton]} onPress={switchPage}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    },
    label: {
        fontWeight: "bold",
        color: "#444",
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    cancelButton: {
        marginTop: 8,
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16
    }
});