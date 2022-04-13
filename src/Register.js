import { StyleSheet, Text, View,Dimensions,TextInput,SafeAreaView,
    ScrollView,TouchableOpacity } from 'react-native'
  import React from 'react'
  const { width, height } = Dimensions.get('window');
  
  
  const Register = ({navigation}) => {
    return (
      <SafeAreaView>
        <ScrollView>
  
      
  
      <View>
        <View style={{height:30}}></View>
        <View style={{backgroundColor:'purple',height:height*1}}>
        
          <View style={{height:50}}></View>
          <View style={{
            //backgroundColor:'white',
          height:40,width:width/1.2,alignSelf:'center'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>←</Text>
              
              <View style={{width:150}}></View>
              <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Register</Text>
            </View>
  
          </View>
          <View style={{height:100}}></View>
          <View style={{
            //backgroundColor:'white',height:65,
          width:width/1.2,alignSelf:'center'}}>
  
  <View style={{height:75,
          backgroundColor:'purple',
         
          width:width/1.2,
          alignSelf:'center',
          borderWidth:2,
          borderColor:'white',
          borderRadius:10,
          }}>
             <View style={{height:10,}}></View>
            <View style={{height:60,
            //backgroundColor:'red',
            width:width/1.3,alignSelf:'center'}}>
              <Text>Address</Text>
              <View style={{height:10}}></View>
              <View style={{
                //backgroundColor:'white',
                height:40,
              width:width/1.33,alignSelf:'center'}}>
                <Text style={{fontSize:20}}>Okhla Phase -1</Text>
              </View>
            </View>
            
          </View>
  
          </View>
          <View style={{height:30}}></View>
          <View style={{height:75,
          backgroundColor:'purple',
          width:width/1.2,
          alignSelf:'center',
          borderWidth:2,
          borderColor:'white',
          borderRadius:10,
          }}>
             <View style={{height:10}}></View>
            <View style={{height:50,
            //backgroundColor:'red',
            width:width/1.3,alignSelf:'center'}}>
              <Text>City</Text>
            </View>
            
          </View>
          <View style={{height:20}}></View>
          <View style={{height:75,
          backgroundColor:'purple',
          width:width/1.2,
          alignSelf:'center',
        
          }}>
          
            <View style={{height:10}}></View>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
             <View style={{height:10}}></View>
            <View style={{height:75,backgroundColor:'purple',
            width:width/2.25,
            alignSelf:'center',
            borderWidth:2,
            borderColor:'white',
            borderRadius:10,
            }}> 
              <View style={{height:10}}></View>
                <Text>State</Text>
            </View>
            <View style={{width:25}}></View>
            <View style={{height:10}}></View>
            <View style={{height:75,backgroundColor:'purple',
            width:width/3,
            alignSelf:'center',
            borderWidth:2,
            borderColor:'white',
            borderRadius:10,
            }}> 
            <View style={{height:10}}></View>
                <Text>Zip</Text>
            </View>
            </View>
            <View style={{height:30}}></View>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
             <View style={{height:10}}></View>
            <View style={{height:75,backgroundColor:'purple',
            width:width/5.25,
            alignSelf:'center',
            borderWidth:2,
            borderColor:'white',
            //borderRadius:10,
      
            }}> 
              <View style={{height:25}}></View>
                <Text style={{alignSelf:'center'}}>+91</Text>
            </View>
            
            <View style={{height:10}}></View>
            <View style={{height:75,backgroundColor:'purple',
            width:width/1.56,
            alignSelf:'center',
            borderWidth:2,
            borderColor:'white',
            //borderRadius:10,
            }}> 
            <View style={{height:10}}></View>
               <TextInput placeholder="Mobile Number"></TextInput>
            </View>
            </View>
            <View style={{height:30}}></View>
          <View style={{height:75,
          backgroundColor:'purple',
          width:width/1.2,
          alignSelf:'center',
          borderWidth:2,
          borderColor:'white',
          borderRadius:10,
          }}>
             <View style={{height:10}}></View>
            <View style={{height:50,
            //backgroundColor:'red',
            width:width/1.3,alignSelf:'center'}}>
              <Text>Promo Code</Text>
            </View>
            
          </View>
          <View style={{height:30}}></View>
          <View style={{height:75,
          backgroundColor:'white',
          width:width/1.2,
          alignSelf:'center',
          borderWidth:2,
          borderColor:'white',
          borderRadius:10,
          }}>
             <View style={{height:10}}></View>
            <View style={{height:50,
            //backgroundColor:'red',
            width:width/1.3,alignSelf:'center'}}>
               <View style={{height:10}}></View>
               <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                 
              <Text style={{fontSize:25,alignSelf:'center'}}>Create Account</Text>
  
  
               </TouchableOpacity>
  
            </View>
            
          </View>
            
           
          </View>
          
          
  
  
        </View>
        
       
       
      </View>
  
      </ScrollView>
      </SafeAreaView>
    )
  }
  
  export default Register
  
  const styles = StyleSheet.create({})