import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import COLORS from '../../themes/theme';
import { Entypo, AntDesign, Fontisto } from '@expo/vector-icons';

const Register = ({ navigation }) => {
	return (
		<View style={{ backgroundColor: COLORS.dark_blue, flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ marginHorizontal: 20, marginTop: 60 }}>
					<Text
						style={{
							color: COLORS.white,
							fontFamily: 'Nunito_800ExtraBold',
							fontSize: 40,
							marginTop: 60,
						}}
					>
						Sign up for
					</Text>
					<Text
						style={{
							color: COLORS.white,
							fontFamily: 'Nunito_800ExtraBold',
							fontSize: 20,
							marginTop: 10,
							textDecorationLine: 'underline',
						}}
					>
						Metroverse
					</Text>

					<View style={{ marginTop: 30 }}>
						<View style={styles.inputContainer}>
							<AntDesign
								name='user'
								size={20}
								color={COLORS.white}
								style={styles.inputIcon}
							/>
							<TextInput
								placeholder='Enter Username'
								style={styles.inputTextField}
								placeholderTextColor={COLORS.white}
							/>
						</View>
						<View style={styles.inputContainer}>
							<Fontisto
								name='email'
								size={20}
								color={COLORS.white}
								style={styles.inputIcon}
							/>
							<TextInput
								placeholder='Enter Email'
								style={styles.inputTextField}
								placeholderTextColor={COLORS.white}
							/>
						</View>
						<View style={styles.inputContainer}>
							<Entypo
								name='lock'
								size={20}
								color={COLORS.white}
								style={styles.inputIcon}
							/>
							<TextInput
								placeholder='Enter Password'
								style={styles.inputTextField}
								secureTextEntry
								placeholderTextColor={COLORS.white}
							/>
						</View>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate('Main')}>
						<View
							style={{
								backgroundColor: COLORS.primary,
								height: 50,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 30,
								elevation: 10,
								marginTop: 20,
								marginHorizontal: 70,
							}}
						>
							<Text
								style={{
									color: COLORS.white,
									fontFamily: 'Nunito_600SemiBold',
									fontSize: 19,
								}}
							>
								Register
							</Text>
						</View>
					</TouchableOpacity>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 35,
						}}
					>
						<Text
							style={{ color: COLORS.white, fontFamily: 'Nunito_600SemiBold' }}
						>
							Already Have An Account?
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Login')}>
							<Text
								style={{
									color: COLORS.primary,
									fontSize: 18,
									fontFamily: 'Nunito_600SemiBold',
								}}
							>
								{' '}
								Login
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		marginTop: 20,
		padding: 15,
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: COLORS.light_blue,
	},
	inputIcon: {
		marginLeft: 15,
		position: 'absolute',
	},
	inputTextField: {
		color: COLORS.white,
		fontFamily: 'Nunito_400Regular',
		paddingLeft: 30,
		flex: 1,
		fontSize: 16,
	},
});
