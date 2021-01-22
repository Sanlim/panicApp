import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-community/picker';

const Item = Picker.Item;

const RecordScreen = ({ navigation }) => {

    const chkData = [
        { label: 1, damage: 0, name: '1 ใจเต้นเร็วและรัว', value: false },
        { label: 2, damage: 0, name: '2 เหงื่อแตก', value: false },
        { label: 3, damage: 0, name: '3 ตัวสั่น', value: false },
        { label: 4, damage: 0, name: '4 อึดอัดหายใจไม่ออก หายใจได้แบบสั้นๆ', value: false },
        { label: 5, damage: 0, name: '5 หายใจติดขัดไม่สะดวก', value: false },
        { label: 6, damage: 0, name: '6 รู้สึกมึนงง โคลงเคลง วิงเวียนศรีษะเป็นลม', value: false },
        { label: 7, damage: 0, name: '7 รู้สึกหนาวๆ ร้อนๆ', value: false },
        { label: 8, damage: 0, name: '8 ตัวชาหรือเป็นเหน็บ', value: false },
        { label: 9, damage: 0, name: '9 รู้สึกไม่เป็นตัวของตัวเอง', value: false },
        { label: 10, damage: 0, name: '10 กลัวที่จะเสียการควบคุมหรือเสียสติ', value: false },
        { label: 11, damage: 0, name: '11 กลัวว่าอาจตายได้', value: false }
    ]

    let chkTrue;

    //CheckBox
    const [arrChk, setArrChk] = useState(chkData)
    const onChkBoxChange = (index) => {
        let newArrChk = [...arrChk]
        newArrChk[index].value = !newArrChk[index].value;
        setArrChk(newArrChk)
        chkTrue = arrChk.filter((chk) => chk.value)
        //chkLabelTrue = chkTrue
    }
    
    //Damage
    const [valueDam, setValueDam] = useState(0);
    const [arrDam, setArrDam] = useState(chkData)
    const onDamageChange = (index, value) => {
        let newArrDam = [...arrDam]
        newArrChk[index].damage = value;
        setArrChk(newArrChk)
        let chkTrue = arrChk.filter((chk) => chk.value)
        setChkTrueCount(chkTrue.length)
    }

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

                        {/* ลิสต์อาการ */}
                        {arrChk.map((chk, index) => (
                            <View key={index.toString()} style={styles.checkBoxContainer}>
                                <Checkbox
                                    status={chk.value ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        onChkBoxChange(index)
                                    }}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>{chk.name}</Text>
                                </View>
                                <View style={styles.pickerContainer} >
                                    <Picker
                                        selectedValue={valueDam}
                                        onValueChange={(v) => setValueDam(v)}
                                        mode="dropdown"
                                    >
                                        <Item label="0" value= {0} />
                                        <Item label="1" value= {1} />
                                        <Item label="2" value= {2} />
                                        <Item label="3" value= {3} />
                                        <Item label="4" value= {4} />
                                        <Item label="5" value= {5} />
                                        <Item label="6" value= {6} />
                                        <Item label="7" value= {7} />
                                        <Item label="8" value= {8} />
                                        <Item label="9" value= {9} />
                                        <Item label="10" value= {10} />
                                    </Picker>
                                </View>
                            </View>
                        ))}

                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => navigation.navigate("Report")}
                        >
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                                    แสดงกราฟความสัมพันธ์ของอาการและระดับความรุนแรง
                                    </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate("Summary",{
                            chkTrue: chkTrue
                        })}
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