import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
const AppStack = createStackNavigator<RootStackParamList>();
import Login from "../pages/Login";
import MeusVoos from "../pages/MeusVoos";
import BuscarVoos from "../pages/BuscarVoos";
// import { Pagamento } from "./pages/Pagamento";
export class Routes extends React.Component {
	render() {
		return (
			<>
				<StatusBar barStyle="light-content" />
				<SafeAreaView style={{ flex: 0, backgroundColor: "#131313" }} />
				<SafeAreaView style={{ flex: 1, backgroundColor: "#131313" }}>
					<NavigationContainer>
						<AppStack.Navigator
							initialRouteName="BuscarVoos"
							screenOptions={{ headerShown: false }}
						>
							<AppStack.Screen name="Login" component={Login} />
							<AppStack.Screen
								name="MeusVoos"
								component={MeusVoos}
							/>
							<AppStack.Screen
								name="BuscarVoos"
								component={BuscarVoos}
							/>
						</AppStack.Navigator>
					</NavigationContainer>
				</SafeAreaView>
			</>
		);
	}
}
