import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const AppointmentScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ข้อมูล</Text>

            <TextInput
                style={styles.inputField}
                numberOfLines={1}
                placeholder="วัน เดือน ปี"
                placeholderTextColor="#666"
            />
            <TextInput
                style={styles.inputField}
                numberOfLines={1}
                placeholder="เวลา"
                placeholderTextColor="#666"
            />
            <TextInput
                style={styles.inputField}
                numberOfLines={1}
                placeholder="สถานที่"
                placeholderTextColor="#666"
            />
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {}}
            >
                <View style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>เพิ่ม</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 150,
        margin: 10,
        borderRadius: 3,
        marginHorizontal: '60%'
    },
    input: {
        padding: 10,
        //flex: 1,
        fontSize: 16,
        //fontFamily:'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    }
});

export default AppointmentScreen;