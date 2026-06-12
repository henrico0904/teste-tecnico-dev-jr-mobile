import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import PerfilScreen from './Screens/PerfilScreen.js';
import ProjetosScreen from './Screens/ProjetosScreen.js';
import HabilidadesScreen from './Screens/HabilidadesScreens.js';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Perfil"
                screenOptions={{
                    headerShown: false,

                    tabBarStyle: {
                        backgroundColor: '#111',
                        height: 90,
                        borderTopWidth: 0,

                    },

                    tabBarActiveTintColor: "#f85538",
                    tabBarInactiveTintColor: '#ffffff86',
                }}>
                <Tab.Screen
                    name="Perfil"
                    component={PerfilScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" size={size} color={color} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Projetos"
                    component={ProjetosScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="folder" size={size} color={color} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Habilidades"
                    component={HabilidadesScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="code-slash" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}