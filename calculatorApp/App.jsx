import { View, Text, StyleSheet, TextInput,TouchableOpacity,StatusBar } from 'react-native';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

const App = () => {
  const [displayValue, setDisplayValue] = useState("");
  const calculateValue=()=>{
    const d=eval(displayValue);
    setDisplayValue(d.toString());
  }
  const handleBack=()=>{
    setDisplayValue(displayValue.slice(0,-1))
  }
  const handlePercentage=()=>{
     if(displayValue){
    const result = eval(displayValue)/100;
    setDisplayValue(result.toString());
  }
  }
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle={'dark-content'}/>
      <Text style={styles.heading}>Old Calculator</Text>
      <TextInput value={displayValue} style={styles.display}></TextInput>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"7")}} style={styles.btn}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"8")}} style={styles.btn}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"9")}} style={styles.btn}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"+")}} style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"4")}} style={styles.btn}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"5")}} style={styles.btn}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"6")}} style={styles.btn}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"-")}} style={styles.btn}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"1")}} style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"2")}} style={styles.btn}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"3")}} style={styles.btn}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"*")}} style={styles.btn}>
          <Text style={styles.btnText}>x</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setDisplayValue("")}} style={styles.btn}>
          <Text style={styles.btnText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"0")}} style={styles.btn}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+".")}} style={styles.btn}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setDisplayValue(displayValue+"/")}} style={styles.btn}>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={calculateValue}  style={[styles.btn,{width:190}]}>
          <Text style={styles.btnText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBack}  style={styles.btn}>
          <Text style={styles.btnText}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePercentage}  style={styles.btn}>
          <Text style={styles.btnText}>%</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
  },
  display: {
    width: '100%',
    backgroundColor: 'white',
    height: 100,
    borderRadius: 15,
    textAlign: 'right',
    fontSize: 28,
    padding: 10,
    marginTop:15
  },
  btn:{
    width:88,
    height:88,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:10
  },
  btnWrapper:{
    flexDirection:'row',
    marginTop:5,
    justifyContent:'space-between',
    flexWrap: 'wrap',
  },
  btnText:{
    fontSize:25,
    // fontWeight:'bold'
  },
  heading:{
    fontSize:28,
    color:'blue',
    fontWeight:'bold',
    alignSelf:'center',
    backgroundColor:'white',
    padding:8,
    borderRadius:15,
  }

});

export default App;