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
              ? styles.paragraphbrown
              : styles.paragraphwhite
          }>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    </View>
    {number === 3 ? <View style={styles.container2}>
      <Text style={
              // Argument -- Inside of a Style Tag
            number === 3
              ? styles.paragraph
              : number === 2
          }>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    </View>: null}
    {number === 3 ? <View style={styles.container}>
      <Text style={
              // Argument -- Inside of a Style Tag
            number === 3
              ? styles.paragraph
              : number === 2
          }>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    </View>: null}
    <View style={styles.container2}>
      <Text style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphpurple
              : styles.paragraphbrown
          }>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    </View>
     {number === 2 ? <View style={styles.container3}>
      <Text style={
              // Argument -- Inside of a Style Tag
            number === 2
              ? styles.paragraph
              : number === 2
          }>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
    </View>: null}
         <View style={styles.container}>
      <Text style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphwhite
              : styles.paragraphyellow
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

  container3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'brown',
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

  paragraphyellow: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
  },

  paragraphpurple: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple',
  },

  paragraphwhite: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  paragraphbrown: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'brown',
  },

  paragraph2: {
    margin: 14,
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  }

})