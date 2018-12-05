import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import Images from '../../../assets/index'
import Information from './information'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


function Contact(props) {
  return (
    <View>
    <View style={styles.user}>
        <Image
             style={styles.cover}
             source={Images[props.User.id]}
        />
    </View>
    <View>
         <Collapse>  
           <CollapseHeader>
                   <View style={styles.container}>
                      <View style={styles.left} >
                        <Text style={styles.title}>Datos Generales</Text>
                      </View>
                      <View style={styles.right}>
                        <Image
                          source ={ require("../../../assets/more.png")}
                          style={styles.more}
                        />
                      </View>
                    </View>
            </CollapseHeader>
            <CollapseBody>
                  <Information Title={props.User.email} Icon="envelope"/>
                  <Information Title={props.User.phone} Icon="phone-square"/>
                  <Information Title={props.User.website} Icon="globe"/>
                  <Information Title={props.User.company.name} Icon="building"/>
                  <Information Title={props.User.address.street} Icon="address-book"/>
            </CollapseBody>

        </Collapse>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
   more:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width:30,
    height:30
  },
  container: {
    padding:15,
    borderWidth: 1.5,
    borderColor: 'black',
    flexDirection:"row"
  },
  cover: {
    height: 250,
    width: 150,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  right: {
    paddingLeft: 10,
    flex:1
  },
  left:{
    flex:5,
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
})

export default Contact