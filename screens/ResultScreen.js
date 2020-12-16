import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ResultScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: 'bold'
                    }}
                >
                    คำตอบของคุณแสดงให้เห็นว่า
                    คุณมี
                    อาการของโรคแพนิคควรปรึกษาจิตแพทย
            </Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("GeneralUser")}
            >
                <View style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>หน้าแรก</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        padding: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 120,
        margin: 10,
        borderRadius: 3,
        marginHorizontal: '65%'
    },
});

export default ResultScreen;