import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    
} from "react-native";

 export default class SplashComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>componentName</Text>
            </View>
        );
    }
}
export default componentName;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red'
    }
});
