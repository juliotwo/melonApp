import React from 'react';
import {
  
  Image,

} from 'react-native';

function Logo() {
  return (
          <Image
        source={require('../../../assets/book.png')}
        style={{ width: 30, height: 30 }}
      />
       
  )
}



export default Logo;
