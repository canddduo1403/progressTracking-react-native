import React,{Component} from 'react';
import {StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import {Icon} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class Finalscene extends Component{
    render(){
        return(
            <View style={{margin: 128}}>
                <Text>Final score</Text> 
            </View>
        );
    }
}