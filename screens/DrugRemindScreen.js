import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import { TextInput } from 'react-native-paper';


const DrugRemindScreen = ({ navigation }) => {
    const [pill, setPill] = useState();
    const [time, setTime] = useState();

    const addPill = () => {

    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>เตือนกินยา</Text>
            
                <Text>ชื่อยา</Text>
                <Text>ปริมาณ </Text>
                <Text>เวลา  น.</Text>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate("Report")}
                >
                    <View style={styles.button} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>บันทึก</Text>
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
});

export default DrugRemindScreen;