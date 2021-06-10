import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNav from './MainNavigation';
import HomeStack from './mainStack';
import ModalStack from '../components/modal1';
const Stack = createStackNavigator();

const stack = () => {
    return (
        
        <Stack.Navigator initialRouteName="Music Player" 
    screenOptions={{
      headerStyle:{backgroundColor:"#fff"},
      headerTintColor:"grey",
      headerTitleStyle: {fontWeight:'bold'},
      headerTitle:"Music Player"
    }}>
      <Stack.Screen name="stack" component={stack} />
      <Stack.Screen name="Myntra" component={ModalStack} options={{ headerRight: () => (
        <View style={{justifyContent:"center", flexDirection:"row"}}>
         
            </View>  )       }} />
      <Stack.Screen name="Insider" component={HomeStack} />
      <Stack.Screen name="Card" component={ModalStack} options={{ headerRight: () => (
        <View style={{justifyContent:"center", flexDirection:"row"}}>
            <Icon.Button name="search" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.navigate('Home')}></Icon.Button>
             <Icon.Button name="heart" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.navigate('Profile')}></Icon.Button>
             <Icon.Button name="cart-plus" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.navigate('Category')}></Icon.Button>
            </View>  )       }}/>
      <Stack.Screen name="Earn" component={HomeStack} />
      <Stack.Screen name="Move" component={HomeStack} />
      <Stack.Screen name="Refer" component={MainNav} />
      <Stack.Screen name="Coupons" component={HomeStack} />
      <Stack.Screen name="Studio" component={MainNav} />
      <Stack.Screen name="Master" component={HomeStack} />




      

    </Stack.Navigator>
    );
}

export default stack;