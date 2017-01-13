/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
    TextInput,
    ScrollView
} from 'react-native';


class  FixedDimensionsBasics extends Component{
render(){

return (

    // 试试去掉父View中的`flex: 1`。
    // 则父View不再具有尺寸，因此子组件也无法再撑开。
    // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
    <View style={{height:300}}>
   <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
      <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
        <View style={{width:150,height:150,backgroundColor:'red'}} />



    </View>

);

}

};

class  FlexDirectionBasics extends Component{

    render(){

        return(

            // 尝试把`flexDirection`改为`column`看看
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
                    <View style={{width:50,height:50,backgroundColor:'red'}}/>
                        <View style={{width:50,height:50,backgroundColor:'black'}}/>

                    </View>
        );

    }
};


class JustifyContentBasics extends Component{

    render(){

        // 尝试把`justifyContent`改为`center`看看
        // 尝试把`flexDirection`改为`row`看看 column（默认）
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'red'}}/>
                <View style={{width:50,height:50,backgroundColor:'black'}}/>

            </View>

        );

    }

};


class  AlignItemsBasics extends Component{
    render(){

        return(
            // 尝试把`alignItems`改为`flex-start` center看看
            // 尝试把`justifyContent`改为`flex-end` center flex-start, 看看
            // 尝试把`flexDirection`改为`row`看看
            // 注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'red'}}/>
                <View style={{width:50,height:50,backgroundColor:'black'}}/>
            </View>

        );

    }
};

class  PizzaTranslator extends Component{
    constructor(props){
        super(props);
        this.state={text:''};
    }
    render(){
        return(
            <View style={{padding:10}}>
                <TextInput
                    style={{height:40}}
                    placeholder="Type here to translate"
                    onChangeText={(text)=>this.setState({text})}
                />
                <Text style={{padding:10,fontSize:42}}>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text>

            </View>

        );
}
};


class  IScrolledDownAndWhatHappenedNextShockedMe extends Component{
    render(){
        return(
            <ScrollView>
                <Text style={{fontSize:36}}>Scroll me plz</Text>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Text style={{fontSize:46}}>Scrolling down</Text>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Text style={{fontSize:56}}>FrameWork around?</Text>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Image source={require('./image/hot.png')}/>
                <Text style={{fontSize:20}}>React Native</Text>
            </ScrollView>

        );
    }


};




export default class HelloProject extends Component {
  render() {
    let pic={
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
//      <Image source={pic} style={{width:193,height:110}} />
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//         HelloProject
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>

        <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue,styles.red]}> bigblue,then red</Text>
        <Text style={[styles.red,styles.bigblue]}> red,then bigblue</Text>
        </View>


    );
  }
}

AppRegistry.registerComponent('HelloProject', () => IScrolledDownAndWhatHappenedNextShockedMe);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },


   bigblue:{
        color :'blue',
        fontWeight:'bold',
        fontSize:30,
      },


      red:{

      color :'red',
      },


});

