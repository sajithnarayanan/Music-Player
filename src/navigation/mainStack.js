import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View,Text } from 'react-native';
import Home from '../screens/Home/';
import stack from './libraryStack';
const Stack = createStackNavigator();



const HomeStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeStack} options={{headerTitleAlign:"left", headerLeft: () => (
           <View style={{justifyContent:"space-between",flexDirection:"row"}}>
             <AntDesign name="menu-unfold" size={25} color="#4a4f51" style={{left:4,}} onPress={()=>navigation.openDrawer()} />
             <AntDesign name="search1" size={25} color="#4a4f51" style={{left:230,}}onPress={() => navigation.openDrawer()}/>
             <AntDesign name="bells" size={25} color="#4a4f51" style={{left:240}} onPress={()=>navigation.openDrawer()}/>
             <AntDesign name="hearto" size={25} color="#4a4f51" style={{left:250,}}  onPress={()=>navigation.openDrawer()}/>
             <AntDesign name="shoppingcart" size={25} color="#4a4f51" style={{left:260,}} onPress={()=>navigation.openDrawer()}/>
           <Stack.Screen name="Library" component={stack} />
           </View>
         )   }}  />

    </Stack.Navigator>
  );
}
// const DrawerStack = () => {
//   return (
//       <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Notifications" component={Explore} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

export default HomeStack;