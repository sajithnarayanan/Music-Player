import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import ModalStack from '../components/modal1'
const MainNav = ({navigation}) => {
    return (
            <View >
                <View>
        <Icon name="menu" size={30} color="black"style={{top:5}} onPress={()=>navigation.openDrawer()} />
        <Text style={{fontFamily:"italic",left:80,top:-22,fontWeight:"bold",fontSize:20}}>Music Player</Text>
        <Icon name="search" size={30} color="black"style={{top:-47,left:320}} onPress={()=>navigation.navigate('ModalStack')} />
        <Icon name="card-giftcard" size={30} color="black"style={{top:-80,left:280}} onPress={()=>navigation.navigate('ModalStack')} />

</View>
            <Image source={require('../assets/bg1.jpg')}style={{height:1000,width:"100%",top:-70}} />
        <View style={{backgroundColor:"#BFE7F2",width:"30%",height:"6%",top:-950,left:"5%",justifyContent:"center"}}>
            <TouchableOpacity><Icon name="music-note" size={40} style={{left:30,top:10}} color="#fff" onPress={()=>navigation.navigate('stack')}/>
            <Text style={{color:"white",left:100,top:-39}}>12</Text>
            <Text style={{left:15,top:-10,fontSize:18,color:"white"}}>LIBRARY</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#F5910B",width:"30%",height:"6%",top:-1040,left:"38%",justifyContent:"center"}}>
            <TouchableOpacity><Icon name="folder" size={40} style={{left:35,top:10}} color="#fff" />
            <Text style={{color:"white",left:110,top:-39}}>5</Text>
            <Text style={{left:20,top:-10,fontSize:18,color:"white"}}>FOLDER</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#DA98B8",width:"30%",height:"6%",top:-1132,left:"69%",justifyContent:"center"}}>
            <TouchableOpacity><Icon name="favorite-outline" size={40} style={{left:35,top:10}} color="#fff" />
            <Text style={{color:"white",left:110,top:-39}}>5</Text>
            <Text style={{left:20,top:-10,fontSize:18,color:"white"}}>FAVORITE</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#98D0DA",width:"30%",height:"6%",top:-1111,left:"5%",justifyContent:"center"}}>
            <TouchableOpacity><Icon name="anchor" size={40} style={{left:35,top:10}} color="#fff" />
            <Text style={{color:"white",left:110,top:-39}}>5</Text>
            <Text style={{left:5,top:-10,fontSize:18,color:"white"}}>RECENT PLAY</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#7DF976",width:"30%",height:"6%",top:-1200,left:"38%",justifyContent:"center"}}>
            <TouchableOpacity><Icon name="sync" size={40} style={{left:35,top:10}} color="#fff" />
            <Text style={{color:"white",left:110,top:-39}}>5</Text>
            <Text style={{left:5,top:-10,fontSize:18,color:"white"}}>RECENT ADD</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#D876F9",width:"30%",height:"6%",top:-1294,left:"69%",justifyContent:"center"}}>
            <TouchableOpacity><Icon name="favorite-outline" size={40} style={{left:35,top:10}} color="#fff" />
            <Text style={{color:"white",left:110,top:-39}}>5</Text>
            <Text style={{left:20,top:-10,fontSize:18,color:"white"}}>MOST PLAY</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",top:-1230,backgroundColor:"cyan",height:40}}>
            <Icon name='add' size={30} style={{left:280,top:5}} onPress={()=>navigation.navigate('ModalStack')}/>
            <Icon name='arrow-right' size={30} style={{left:290,top:5}}/>

            <Text style={{top:10,fontSize:15}}>PLAYLIST(1)</Text>
        </View>
        <View style={{backgroundColor:"#D876F9",width:"30%",height:"6%",top:-1200,left:"5%",justifyContent:"center"}}>
        <TouchableOpacity><Icon name="music-note" size={30} color="white" height="20%" style={{bottom:-18,left:38}}/>
        <Icon name="menu" size={30} color="white" height="20%" style={{bottom:10,left:20}}/>
        <Text style={{backgroundColor:"#C5C4C6"}}>Default list</Text>
        <Text style={{left:110,top:-70}}>0</Text>
        </TouchableOpacity>
        </View>  
        <View style={{backgroundColor:"#D876F9",width:"30%",height:"6%",top:-1291,left:"40%",justifyContent:"center"}}>
        <TouchableOpacity>
            <Icon name="add" size={50} style={{left:30}} onPress={()=>navigation.navigate('Modalstack')}/>
        </TouchableOpacity>
        </View>  
        
        </View>
    );
}

export default MainNav;