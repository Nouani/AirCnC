import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { ScrollView ,Modal, SafeAreaView, AsyncStorage, Text, Image, StyleSheet, Alert } from 'react-native';

import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.0.10:3333', {
                query: { user_id }
            });

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
            })
        })
    }, [])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            setTechs(storageTechs.split(',').map(tech => tech.trim()));
        })
    }, [])

    return (
        <Modal >
            <SafeAreaView style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <ScrollView>
                    {techs.map(tech => <SpotList key={tech} tech={tech} />)}
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})