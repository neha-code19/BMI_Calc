import React, { useState } from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';



const Homepage = () => {

  const handleCalculate=(height,weight)=>{
    let height1 = height;
    let mass = weight;
    
    if(height1 <= 0 || mass <= 0){
      return setState("Please enter valid values")
    }
    if(selectedHeight == null || selectedWeight == null){
      return setState("Please select unit")
    }
    const heightUnit = selectedHeight
    const weightUnit = selectedWeight
    if(heightUnit != 1){
      height1 = height1 * 2.54;
    }
    if(weightUnit != 3){
      mass = mass * 0.453592;
    }
    const bmi = (mass /(height1*height1))*10000;
    setResult(bmi.toFixed(2))

    if (bmi < 19) {
      setState("Underweight");
    } else if (bmi >= 19 && bmi < 25) {
      setState("Normal Weight");
    } else if (bmi >= 25 && bmi < 30) {
      setState("Overweight");
    } else {
      setState("Obesity");
    }
  }

  const [height,setHeight]= useState(0);
  const [weight,setWeight]= useState(0);
  const [result,setResult]= useState();
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [iState, setState]= useState('')
  const heightData =[
     { label: 'cm', value: '1' },
    { label: 'inch', value: '2' },
  ]
  const weightData =[
     { label: 'Kg', value: '3' },
    { label: 'Lbs', value: '4' },
  ]

  return (


    <View style={{backgroundColor:'#f5eee6',alignItems:'center',justifyContent:'center',marginTop:140}}>
      <Text style={styles.title}>BMI Calculator </Text>
      
      <View style={styles.textView}>
        <TextInput
          placeholder="Mass"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(weight)=>setWeight(weight)}
          />
        
        <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={weightData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={selectedWeight}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setSelectedWeight(item.value);
          setIsFocus(false);
        }}
        />
      </View>

      <View style={styles.textView}>
        <TextInput
        placeholder="Height in cm"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={height=>setHeight(height)}
        />
          <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={heightData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={selectedHeight}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSelectedHeight(item.value);
            setIsFocus(false);
          }}
          />
      </View>

      <View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={()=>handleCalculate(height,weight)}>
          <Text style={styles.saveButtonText}>Calculate</Text>
        </TouchableOpacity>
          <Text style={[styles.result, { fontSize: 35 }]}>
          {result}{'\n'}{iState} 
          </Text>

      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    width: 250,
    marginBottom:50,
    color: 'black',
    borderRadius:10
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    width:300,
    backgroundColor: '#007BFF',
    padding: 5,
    marginTop: 20,
    borderRadius:40
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  textView:{
    width:350,
    flexDirection:'row'
  },
  result: {
    alignSelf: "center",
    color: "black",
    fontSize: 65,
    padding: 15
  },
    dropdown: {
      width:100,
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginLeft:10
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 15,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    }
});

export default Homepage