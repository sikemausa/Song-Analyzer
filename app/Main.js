import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform, Text, View, Switch, Navigator, TouchableHighlight } from 'react-native';
import { DinoFacts } from './DinoFacts';


export class Main extends Component {

  state = {
    horizontalIsOn: false,
  };

  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => {
            this.props.navigator.push({
              component: DinoFacts,
              title: 'Dino Facts',
              navigator: this.props.navigator
            });
        }}>
        <Text style={styles.navLink}>View Dino Facts</Text>
        </TouchableHighlight>

        <Text>Scroll Horizontal</Text>
        <Switch
          onValueChange={(value) => this.setState({horizontalIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.horizontalIsOn} />
      </View>
    )
  }
}



let { height, width } = Dimensions.get(`window`);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      top: 15,
    },
    navLink: {
      fontSize: 16,
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: 50,
      color: '#1d9758'
    },
    header: {
      fontSize: 24,
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: 5,
    },
    dinoList: {
      padding: 5,
    },
})
