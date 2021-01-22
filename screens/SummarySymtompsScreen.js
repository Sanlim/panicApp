import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';

const SummarySymtompsScreen = ({ route, navigation }) => {
    const chkData = [
        { label: 1, damage: 5, name: '1 ใจเต้นเร็วและรัว', value: false },
        { label: 2, damage: 4, name: '2 เหงื่อแตก', value: false },
        { label: 3, damage: 1, name: '3 ตัวสั่น', value: false },
        { label: 4, damage: 6, name: '4 หายใจได้แบบสั้นๆ', value: false },
        { label: 5, damage: 4, name: '5 หายใจติดขัดไม่สะดวก', value: false },
        { label: 6, damage: 3, name: '6 รู้สึกมึนงง', value: false },
        { label: 7, damage: 2, name: '7 รู้สึกหนาวๆ ร้อนๆ', value: false },
        { label: 8, damage: 4, name: '8 ตัวชาหรือเป็นเหน็บ', value: false },
        { label: 9, damage: 1, name: '9 รู้สึกไม่เป็นตัวของตัวเอง', value: false },
        { label: 10, damage: 0, name: '10 กลัวที่จะเสียสติ', value: false },
        { label: 11, damage: 0, name: '11 กลัวว่าอาจตายได้', value: false }
    ]

    // const { chkTrue } = route.params;
    // console.log(chkTrue);

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>สรุปอาการ</Text>

            </View>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>อาการ</DataTable.Title>
                    <DataTable.Title numeric>ระดับความรุนแรง</DataTable.Title>
                </DataTable.Header>

                {chkData.map((chk, index) =>
                    <DataTable.Row key={index.toString()} >
                        <DataTable.Cell >{chk.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{chk.damage}</DataTable.Cell>
                    </DataTable.Row>
                )}

            </DataTable>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
            >
                <View style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>กลับ</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a6e4d0',
        padding: 10,
        width: 100,
        margin: 10,
        borderRadius: 3,
        marginHorizontal: '70%'
    },
});

export default SummarySymtompsScreen;