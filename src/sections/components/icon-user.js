import React from 'react';
import {
  
  Image,

} from 'react-native';

function Logo() {
  return (
           <Image
        source={require('../../../assets/user.png')}
        style={{ width: 30, height: 30 }}
      />
       
  )
}



export default Logo;
