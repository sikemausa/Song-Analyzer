import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, Navigator } from 'react-native';

export class DinoFacts extends Component {

  render() {
    const routes = [
      { dinoName: 'allasaur', diet: 'carnivore', size: '28 feet, 2.3 tons' },
      { dinoName: 'pterodactyl', diet: 'carnivore', size: '20 feet, 2 tons' },
      { dinoName: 'stegosaurus', diet: 'herbivore', size: '30 feet, 5 tons' },
      { dinoName: 't-rex', diet: 'carnivore', size: '42 feet, 7 tons' },
    ];

    return (
      <View>

        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text style={styles.navLink}>Back</Text>
        </TouchableHighlight>

        <Navigator
          style={styles.navContainer}
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) => {
            return (
              <View style={styles.dinoFacts}>
                <Text>Diet: {route.diet}</Text>
                <Text>Size: {route.size}</Text>
              </View>
            );
          }}

          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) => {
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                      <Text style={styles.prevButton}>Prev</Text>
                    </TouchableHighlight>
                  );
                },

                RightButton: (route, navigator, index, navState) => {
                  return (
                    <TouchableHighlight onPress={() => navigator.push(routes[index + 1])}>
                      <Text style={styles.nextButton}>Next</Text>
                    </TouchableHighlight>
                  );
                },

                Title: (route, navigator, index, navState) => {
                  return (
                    <Text style={styles.dinoHeader}>{route.dinoName}</Text>
                  );
                },
              }}
              style={styles.navBar}
            />
          }
        />
      </View>
    )
  }
}


let { height, width } = Dimensions.get(`window`);

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    width: width,
  },
  navBar: {
    backgroundColor: '#1d9758',
    borderBottomColor: '#1d9758',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    width: width,
  },
  prevButton: {
    marginLeft: 20,
  },
  nextButton: {
    marginRight: 20,
  },
  dinoHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  dinoFacts: {
    marginTop: 100,
    alignItems: 'center',
  },
  navLink: {
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 50,
    color: '#1d9758'
  },
})
