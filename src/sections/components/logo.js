import React from 'react';
import {
  
  Image,

} from 'react-native';

function Logo() {
  return (
          <Image
        source={require('../../../assets/logo.png')}
        style={{ width: 50, height: 50 }}
      />
       
  )
}



export default Logo;
