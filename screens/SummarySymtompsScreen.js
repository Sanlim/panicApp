import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Table from '../components/Table';
import { DataTable } from 'react-native-paper';

const SummarySymtompsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>สรุปอาการ</Text>

            </View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>อาการ</DataTable.Title>
                    <DataTable.Title numeric>ระดับความรุนแรง</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 1</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 2</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 3</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 4</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 5</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 6</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 7</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 8</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 9</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>อาการที่ 10</DataTable.Cell>
                    <DataTable.Cell numeric>5</DataTable.Cell>
                </DataTable.Row>

            </DataTable>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}
            >
                <View style={styles.button} >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                    >
                        กลับ
                            </Text>
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