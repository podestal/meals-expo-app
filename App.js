import { StyleSheet, Button, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import User from './components/User';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MealsCategory">
        <Stack.Screen 
          name='MealsCategory' 
          component={BottomNavigator} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        <Stack.Screen 
          name='MealDetail' 
          component={MealDetailScreen}
          options={{
            headerRight: () => <Button title='Tap me'/>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
