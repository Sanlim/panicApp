import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';

import CheckBoxes from '../components/CheckBox';


const PanicTestScreen = ({navigation}) => {

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
                        >ส่วนที่ 1</Text>
                        <Text
                            style={{
                                fontSize: 17,
                                //fontWeight: 'bold',
                                padding: 5,
                                margin: 5
                            }}
                        >
                            {'\t'}{'\t'}โรคแพนิคเป็นอาการที่เกิดขึ้นแบบจู่โจม รู้สึกกลัวหรือตื่นตระหนกอย่างฉับพลันภายในไม่กี่นาที
                            โดยระหว่างที่ท่านมีอาการแพนิค ท่านมีอาการต่างๆเหล่านี้ร่วมด้วยอย่างน้อย 4 อย่างหรือไม่
                        </Text>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>1 ใจเต้นเร็วและรัว</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>2 เหงื่อแตก</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>3 ตัวสั่น</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>4 อึดอัดหายใจไม่ออก หายใจได้แบบสั้นๆ</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>5 หายใจติดขัดไม่สะดวก</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>6 รู้สึกมึนงง โคลงเคลง วิงเวียนศรีษะเป็นลม</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>7 รู้สึกหนาวๆ ร้อนๆ</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>8 ตัวชาหรือเป็นเหน็บ</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>9 รู้สึกเหมือนตกอยู่ในควาฝันเหมือน{'\n'}ไม่เป็นตัวของตัวเอง</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>10 กลัวที่จะเสียการควบคุมหรือเสียสติ</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBoxes />
                            <Text style={styles.text}>11 กลัวว่าอาจตายได้</Text>
                        </View>

                    </View>

                    <View style={styles.chBox2}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                padding: 10
                            }}
                        >ส่วนที่ 2</Text>
                        <Text
                            style={{
                                fontSize: 17,
                                //fontWeight: 'bold',
                                padding: 5,
                                margin: 5
                            }}
                        >
                            {'\t'}{'\t'}เมื่อท่านมีอาการแพนิคท่านเคยมีอาการตามข้อด้านล่างนี้
                            ไม่ว่าจะข้อใดข้อหนึ่งหรือทั้งสองข้อเป็นระยะเวลา 1 เดือนหรือมากกว่าบ้างไหม
                        </Text>

                        <View style={styles.checkBoxContainer2}>
                            <CheckBoxes />
                            <Text style={styles.text}>
                                ยังคงรู้สึกวิตกกังวลเกี่ยวกับอาการแพนิคที่เกิดขึ้นไปแล้วหรือกังวลถึงผลที่เกิดขึ้นตามมา เช่น
                                การเสียการควบคุมตนเอง อาการเสียสติ อาการหัวใจวาย
                            </Text>
                        </View>

                        <View style={styles.checkBoxContainer2}>
                            <CheckBoxes />
                            <Text style={styles.text}>
                                มีพฤติกรรมที่เปลี่ยนไปอย่างเห็นได้ชัด เช่น หลีกเลี่ยงสถานการณ์ที่จะทำให้เกิดอาการแพนิค
                                ไม่ออกกำลังกายเลี่ยงสถานการณ์ที่ไม่คุ้นเคย เป็นต้น
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate("Result")}
                    >
                        <View style={styles.button} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ประเมินผล</Text>
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
        padding: 10,
        margin: 5
    },
    checkBoxContainer2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        marginRight: 30
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
    text: {
        fontSize: 16,
    }
});

export default PanicTestScreen;