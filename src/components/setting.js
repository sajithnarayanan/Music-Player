import React,{ useState } from 'react';
import { View, Text,ScrollView,Switch } from 'react-native';
const Setting = () => {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isDisabled, setIsDisabled] = useState(true);
  const toggleSwitch1 = () => setIsDisabled(previousState => !previousState);
  const [main, setmain] = useState(false);
  const toggleSwitch3 = () => setmain(previousState => !previousState);
  const [value, setvalue] = useState(false);
  const toggleSwitch2 = () => setvalue(previousState => !previousState);
  const [first, setFirst] = useState(false);
  const toggleSwitch4 = () => setFirst(previousState => !previousState);
  const [two, settwo] = useState(false);
  const toggleSwitch0 = () => settwo(previousState => !previousState);
    return (
       <View style={{backgroundColor:"cyan",height:1000}}>
                   <Text style={{color:"yellow",top:40,left:10,marginBottom:40}}>Normal Settings</Text>
                  <View>
                       <Text style={{top:25,left:20,fontSize:14}}>Desktop Irc</Text>
                   <Text style={{top:25,left:20,fontSize:13}}>Desktop Lyrics closed</Text>
                   <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
                   </View>
                   <Text style={{top:30,left:20}}>Lock screen playing</Text>
                   <Text style={{top:32,left:20,fontSize:13}}>Show nowplaying when lock screen</Text>
                   <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isDisabled}
      />
      <Text style={{left:20,top:23}}>Volume fade in and fade out</Text>
      <Text style={{top:25,left:20,fontSize:13}}>Switch songs, the volume smooth transition</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={main ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch3}
        value={main}
      />
            <Text style={{left:20,top:23}}>Change song by shaking</Text>
            <Text style={{left:20,top:23,fontSize:13}}>Shake to next song</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={value}
      />
      <Text style={{left:20,top:23}}>Opne now playing on play</Text>
            <Text style={{left:22,top:23,fontSize:13}}>If this option is enable, click song will enter now {"\n"} palying page.</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={first ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch4}
        value={first}
      />
        <Text style={{left:20,top:23}}>Click tracks add to current que</Text>
            <Text style={{left:20,top:23,fontSize:13}}>Click one song will only add the song into current {"\n"} que, will not add/change other songs in current {'\n'}que.</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={two ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch0}
        value={two}
      />
      <Text>Hi</Text>
     
       </View>
    );
}

export default Setting;