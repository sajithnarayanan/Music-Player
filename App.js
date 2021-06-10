import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';  
import MainNav from './src/navigation/MainNavigation';
import Home from './src/screens/Home';
import HomeStack from './src/screens/Home/index';
import ModalStack from './src/components/modal1';
import stack from './src/navigation/libraryStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Drawer = createDrawerNavigator();

// const HomeStackScreen = ({navigation})=>(
//     <HomeStack.Navigator>
//         <HomeStack.Screen name="Profile" component={stack}  options={{
//             title:"Home"
//         }} />
//     </HomeStack.Navigator>
// );



const App = ({navigation}) => {
    return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainNav} options={{
            title:"Home",headerLeft: () => (
                <AntDesign name="search1" size={40} width={60} height={60} color="black" backgroundColor="red" onPress={() => navigation.navigate('stack')}></AntDesign>
            )
            }} />
                    <Drawer.Screen name="Categories" component={ModalStack} options={{ title:"Scan Library",headerLeft: () => (
                <Icon.Button name="lens" size={20} width={60} height={60} style={{marginRight:20}} color="black" backgroundColor="#fff" onPress={() => navigation.navigate('MainNav')}></Icon.Button>
            )}}/>
        <Drawer.Screen name="Orders" component={ModalStack} options={{ title:"Equalizer",headerLeft: () => (
                <Icon.Button name="menu-unfold" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}}/>
        <Drawer.Screen name="Shuffle" component={Home} options={{headerLeft: () => (
                <Icon.Button name="menu-fold" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}} />
        <Drawer.Screen name="Theme" component={stack} options={{headerLeft: () => (
                <Icon.Button name="search2" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}} />
        <Drawer.Screen name="Widget" component={Home} options={{headerLeft: () => (
                <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}}/>
 <Drawer.Screen name="Sleep Timer" component={Home} options={{headerLeft: () => (
                <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}}/>
 <Drawer.Screen name="Drive mode" component={Home} options={{headerLeft: () => (
                <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}}/>
 <Drawer.Screen name="Hidden feautres" component={Home} options={{headerLeft: () => (
                <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}}/>
 <Drawer.Screen name="Settings" component={Home} options={{headerLeft: () => (
                <Icon.Button name="gear" size={40} width={60} height={60} style={{left:10}}color="black" backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}}/>

      </Drawer.Navigator>
       </NavigationContainer>

    );
}


export default App;
