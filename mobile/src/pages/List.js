import React, { useState, useEffect } from 'react';
import { ScrollView ,Modal, SafeAreaView, AsyncStorage, Text, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List() {
    const [techs, setTechs] = useState([]);

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