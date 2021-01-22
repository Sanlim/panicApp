import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import ListAppointment from '../components/ListAppointment';
import uuid from 'uuid-random';

const AppointmentScreen = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');

    const onChangeDate = textDate => setDate(textDate);
    const onChangeTime = textTime => setTime(textTime);
    const onChangePlace = textPlace => setPlace(textPlace);

    const [items, setItems] = useState([]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(items => items.id != id)
        })
    }

    const addItem = (date, time, place) => {
        if (!(date && time && place)) {
            Alert.alert('Error', 'กรุณาใส่ข้อมูล', [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
                { cancelable: true });
        } else {
            setItems(prevItems => {
                return [{ id: uuid(), date, time, place }, ...prevItems]
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>รายละเอียด</Text>

            <TextInput
                style={styles.inputField}
                numberOfLines={1}
                placeholder="วัน เดือน ปี"
                placeholderTextColor="#666"
                onChangeText={onChangeDate}
            />
            <TextInput
                style={styles.inputField}
                numberOfLines={1}
                placeholder="เวลา"
                placeholderTextColor="#666"
                onChangeText={onChangeTime}
            />
            <TextInput
                style={styles.inputField}
                numberOfLines={1}
                placeholder="สถานที่"
                placeholderTextColor="#666"
                onChangeText={onChangePlace}
            />

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => addItem(date, time, place)}
            >
                <View style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>บันทึก</Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ListAppointment item={item} deleteItem={deleteItem} />
                )}
            />
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