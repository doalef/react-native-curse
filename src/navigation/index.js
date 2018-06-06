import { StackNavigator } from 'react-navigation';
import Landing from './../ui/curse-list';
import Curse from './../ui/curse';
import React from 'react';
import { View , Text } from 'react-native';

export default StackNavigator({
    landing: {
        screen: Landing,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
              fontFamily: "DimaWeb",
              marginLeft: "50%"
            },
            headerRight: <View />,
            headerLeft: <View />,
            headerTitle: (
              <View style={{ position: "absolute", left: 0, right: 0 }}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 22,
                    color: "#1F3240"
                  }}
                >
                  Binary Curse
                </Text>
              </View>
            )})
    },
    curse: {
        screen: Curse,
        navigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
              fontFamily: "DimaWeb",
              marginLeft: "50%"
            },
            headerRight: <View />,
            headerTitle: (
              <View style={{ position: "absolute", left: 0, right: 0 }}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 22,
                    color: "#1F3240"
                  }}
                >
                  Binary Curse
                </Text>
              </View>
            )})
    }
});
