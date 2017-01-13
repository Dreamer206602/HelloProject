import React,{Component} from 'react'
import {AppRegistry,TextView,View}from 'react-native'

export default class Blink extends Component{


constructor(props){
   super(props)
   this.state={ showText:true}

   // 每1000毫秒对showTextView 状态做一次取反操作
   setInterval(()=>{
      this.setState({showText: !this.state.showText});
   },1000);

}

  render(){
     //根据当前showText的值决定是否显示text内容
     let display=this.state.showText?this.props.text:'';

     return (
        <Text>{display}</>
     );


  }





  class BlinkApp extends Component{
      render(){

         return (
          <View>
          <Blink text='I love to blink' />
                  <Blink text='Yes blinking is so great' />
                  <Blink text='Why did they ever take this out of HTML' />
                  <Blink text='Look at me look at me look at me' />

          </View>

         );


      }

  }

}
  AppRegistry.registerComponent('BlinkApp',()=>BlinkApp);
