import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';

import CheckBoxes from '../components/CheckBox';
import DropdownPicker from '../components/DropdownPicker';


const RecordScreen = ({navigation}) => {
    const [check, setCheck] = useState(false);
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.chBox} >

                    <View style={styles.chBox1}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                padding: 10
                            }}
                        >บันทึกอาการ</Text>

                        <View style={styles.checkBoxContainer}>
                                <Text style={styles.text}>อาการที่เกิดขึ้น</Text>
                                <Text>                                         </Text>
                                <Text style={styles.text}>ความรุนแรง</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>1 ใจเต้นเร็วและรัว</Text>
                            </View>
                            <View style={styles.pickerContainer} >
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>2 เหงื่อแตก</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>3 ตัวสั่น</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>4 อึดอัดหายใจไม่ออก หายใจได้แบบสั้นๆ</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>5 หายใจติดขัดไม่สะดวก</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>6 รู้สึกมึนงง โคลงเคลง วิงเวียนศรีษะเป็นลม</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>7 รู้สึกหนาวๆ ร้อน</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>8 ตัวชาหรือเป็นเหน็บ</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>9 รู้สึกเหมือนตกอยู่ในควาฝันเหมือนไม่เป็นตัวของตัวเอง</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>10 กลัวที่จะเสียการควบคุมหรือเสียสติ</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>11 กลัวว่าอาจตายได้</Text>
                            </View>
                            <View style={styles.pickerContainer}>
                                <DropdownPicker />
                            </View>
                        </View>
                        <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => navigation.navigate("Report")}
                            >
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold',textDecorationLine: 'underline' }}>
                                        แสดงกราฟความสัมพันธ์ของอาการและระดับความรุนแรง
                                    </Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate("Summary")}
                    >
                        <View style={styles.button} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>บันทึก</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chBox: {
        flex: 1,
    },
    chBox1: {
        flex: 1,
        margin: 5
    },
    chBox2: {
        flex: 1,
        padding: 5
    },
    checkBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        margin: 5,
        backgroundColor: '#fff',
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
    textContainer: {
        width: '65%'
    },
    text: {
        fontSize: 18,
    },
    pickerContainer: {
        flex: 1,
        //flexDirection:'row'
    }
});

export default RecordScreen;