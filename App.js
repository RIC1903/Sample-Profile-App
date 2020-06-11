import React from 'react';
import {ScrollView, StyleSheet, Text, View,Image ,ImageBackground,Component,TouchableOpacity,Linking} from 'react-native';

export default function App() {
  
  return (
    
    <ScrollView>
    
      <View style={{marginTop:10, justifyContent:"center", flexDirection:"row",backgroundColor:"#ffd11a"}}>
      <Image style ={{width:60,height:70,borderRadius:100,backgroundColor:"black"}} source={require('./assets/me2.png')}></Image>
      <View style={{marginLeft: 0}}>
      <Text style={{fontSize: 25}}>Sairaj Mishra</Text>
      <Text style={{fontSize:17}}Computer Science and Engineering</Text>
      <Text style={{fontSize:17}}>VIT University</Text>

</View>
      </View>

     <View style={{marginTop:0,backgroundColor:"#33cc33", justifyContent:"center",flexDirection:"row"}}>
       <Text style={{fontSize:20}}>◤BASIC INFO◢</Text>
       </View>
       <View style={{justifyContent:'center'}}>
          <View style={{marginTop:0,backgroundColor:"red", justifyContent:"center",backgroundColor:"#ccff33"}}>
            <Text style={{fontSize:18,marginTop:15}}>⦿Undergraduate B.Tech Student At Vellore Institute Of Tecnology</Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
            <Text style={{fontSize:18,marginTop:0}}>Computer Science and Technology </Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
            <Text style={{fontSize:18,marginTop:0}}>Web Dev || App Dev || Deep Learning</Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
            <Text style={{fontSize:18,marginTop:0}}>Worked on various cool projects</Text> 
          </View>

      </View>
<View style={{backgroundColor:"#33cc33",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤SKILLS◢</Text>
</View>
<View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Python</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★C++</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★HTML</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★CSS</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★JavaScript</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★React Native</Text> 
      </View>

      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Data Structures And Algorithms</Text> 
      </View
     

   
    <View style={{backgroundColor:"#33cc33",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤Education◢ </Text>
  </View>
  <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>FIITJEE, Vizag</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>Delhi Public School, Visakhapatnam</Text> 
      </View>
 


  <View>
  <View style={{backgroundColor:"black",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{color:"white"}}>
       Made by Sairaj Mishra
  </Text>

  </View>


      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
});
