import React from 'react';
import { SafeAreaView,Text,View} from 'react-native';

const App = () => {
    return (
    <SafeAreaView>
    <View style={{position: 'relative', backgroundColor: 'green'}}>
    <View
    style={{backgroundColor: 'yellow',
    //margins

    margin: 10,
   // marginTop: 25,
    //marginLeft: 100,
   // marginRight: 100,
   // marginBottom: 100,
    marginVertical: 50,
    marginHorizontal: 50,
/////////////////////////
//paddings
    padding: 10,
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 100,
    paddingHorizontal: 50,
    paddingVertical: 50,
    position: 'relative',
    zIndex: 1,

 }}>
    <Text>"Hello World" </Text>
    </View>

    <View
        style={{
        backgroundColor: 'red',
        ///position
        position: 'absolute',
        top: 10,
        left: 5,
        right: 10,
        bottom: 10,
       // zIndex:2,






        }}>
        <Text>"Hello World 2!!!!" </Text>
         </View>
        </View>



    </SafeAreaView>


    );
};


export default App;
