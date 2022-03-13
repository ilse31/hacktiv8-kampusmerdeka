import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home.jsx";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import Postpage from "./pages/Postpage.jsx";
import CommentPage from "./pages/CommentPage.jsx";

const Stack = createBottomTabNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-variant" : "home-variant-outline";
            } else if (route.name === "Postpage") {
              iconName = focused ? "post" : "post-outline";
            } else if (route.name === "CommentPage") {
              iconName = focused ? "comment" : "comment-check";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CommentPage' component={CommentPage} />
        <Stack.Screen name='Postpage' component={Postpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
