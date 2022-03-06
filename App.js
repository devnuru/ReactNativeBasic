import React from 'react'
import { View, Text, ScrollView, Image, TextInput, Button } from 'react-native'

function App() {
  return (
    <ScrollView>
      <Text>Hello React Native</Text>
      <View>
        <Text>React Native Basic Learning</Text>
        <Image 
         source={{
           uri:'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&w=1000&q=80',

         }}
         style={{ width: 380, height: 300, borderRadius:10}}
        />
      </View>
      <TextInput
      style={{
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5 
      }}
     placeholder="Type Here Your Name"
      />
      <Button title="Submit" />
    </ScrollView>
  )
}

export default App