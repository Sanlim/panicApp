import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';

const SummarySymtompsScreen = ({ navigation }) => {
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

                <DataTable.Row>
                    <DataTable.Cell>ใจเต้นเร็วและรัว</DataTable.Cell>
                    <DataTable.Cell numeric>2</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>เหงื่อแตก</DataTable.Cell>
                    <DataTable.Cell numeric>4</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>ตัวสั่น</DataTable.Cell>
                    <DataTable.Cell numeric>1</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>หายใจได้แบบสั้นๆ</DataTable.Cell>
                    <DataTable.Cell numeric>3</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>หายใจติดขัดไม่สะดวก</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>รู้สึกมึนงง</DataTable.Cell>
                    <DataTable.Cell numeric>4</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>รู้สึกหนาวๆร้อนๆ</DataTable.Cell>
                    <DataTable.Cell numeric>6</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>ตัวชาหรือเป็นเหน็บ</DataTable.Cell>
                    <DataTable.Cell numeric>2</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>รู้สึกเหมือนตกอยู่ในความฝัน</DataTable.Cell>
                    <DataTable.Cell numeric>6</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>กลัวที่จะเสียสติ</DataTable.Cell>
                    <DataTable.Cell numeric>1</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>กลัวว่าอาจตายได้</DataTable.Cell>
                    <DataTable.Cell numeric>0</DataTable.Cell>
                </DataTable.Row>

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