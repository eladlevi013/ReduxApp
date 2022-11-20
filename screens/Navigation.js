import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Character from './Character.js';
import CharacterInfo from './CharacterInfo.js';

const CharacterStackNavigator = createNativeStackNavigator();
export const CharacterStack = () => {
    return (
        <CharacterStackNavigator.Navigator>
            <CharacterStackNavigator.Screen name='character' component={Character} />
            <CharacterStackNavigator.Screen name='characterInfo' component={CharacterInfo} />
        </CharacterStackNavigator.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();
export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='character_tab' component={CharacterStack} />
        </Tab.Navigator>
    )
}
