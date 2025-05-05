import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Button, ScrollView } from 'react-native';

const App = () => {

  const [number, setNumber] = useState(1);

  const changenumber = () => {
    if (number < 3) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  };

  return (
//
    <View>

//Leave this code untouched begin 

  <Pressable onPress={() => changenumber()}>
       
        <Text
     
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen
          }>
        This is my first interest. this is {number}
        </Text>
      </Pressable>

//Leave this code untouched end 



 <ScrollView>
 <View style={styles.container}>
      <Text style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen
          }>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    </View>
     <View style={styles.container2}>
      <Text style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphblue
              : styles.paragraphblue
          }>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    </View>
         <View style={styles.container}>
      <Text style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen
          }>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    </View>
    </ScrollView>
    </View>
  );
};

// Output (like HTML) ends here

//need to export the Component.
export default App;

//Styling -- Like CSS starts here.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 8,
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraphred: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  paragraphgreen: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },

  paragraphblue: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },

  paragraph2: {
    margin: 14,
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  }

})