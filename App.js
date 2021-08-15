import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

const myTimer = new Timer();

const TimerView = observer(({ timer }) => (
  <View>
    <Text>Seconds passed: {myTimer.secondsPassed}</Text>
  </View>
));

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TimerView />
      <Text>You are on Home Screen</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => myTimer.increaseTimer()}>
        <Text>Press Me</Text>
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          // La fonction navigate() permet de naviguer vers un écran. On lui passe comme argument le nom de l'écran vers lequel on souhaite naviguer (ce nom se trouve dans App.js)
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
};

const Details = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TimerView />
      <Text>You are on Home Screen</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => myTimer.increaseTimer()}>
        <Text>Press Me</Text>
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          // La fonction navigate() permet de naviguer vers un écran. On lui passe comme argument le nom de l'écran vers lequel on souhaite naviguer (ce nom se trouve dans App.js)
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
