import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchView from './src/views/SearchView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SearchView}
          options={{ title: 'Yelp Search' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
