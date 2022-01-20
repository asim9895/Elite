import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import COLORS from '../../themes/theme';
import { useRoute } from '@react-navigation/native';

const Edit = () => {
	const route = useRoute();
	let profile = route.params.profile;

	const [edit_form, setedit_form] = useState({
		name: profile?.name ? profile?.name : '',
		profession: profile?.profession ? profile?.profession : '',
		bio: profile?.bio ? profile?.bio : '',
	});

	const { name, profession, bio } = edit_form;
	return (
		<View style={{ backgroundColor: COLORS.dark_blue, flex: 1 }}>
			<View
				style={{
					borderWidth: 1,
					borderColor: 'rgba(0,0,0,0.2)',
					position: 'absolute',
					bottom: 0,
					width: '100%',
					height: 70,
					zIndex: 1,
					backgroundColor: COLORS.dark_blue,
					paddingTop: 10,
				}}
			>
				<View
					style={{
						marginHorizontal: 40,
						backgroundColor: COLORS.primary,
						borderRadius: 15,
						padding: 10,
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							color: COLORS.white,
							fontSize: 16,
							fontFamily: 'Nunito_800ExtraBold',
						}}
					>
						Submit
					</Text>
				</View>
			</View>
			<ScrollView style={{ marginTop: 10, marginHorizontal: 20 }}>
				<View style={styles.inputContainer}>
					<Text style={styles.textStyle}>Name</Text>
					<TextInput
						placeholder='Enter name'
						style={styles.inputTextField}
						placeholderTextColor={COLORS.white}
						value={name}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.textStyle}>Profession</Text>
					<TextInput
						placeholder='Enter Profession'
						style={styles.inputTextField}
						placeholderTextColor={COLORS.white}
						value={profession}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.textStyle}>Bio</Text>
					<TextInput
						placeholder='Enter Bio'
						style={styles.inputTextField}
						placeholderTextColor={COLORS.white}
						numberOfLines={4}
						multiline={true}
						value={bio}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default Edit;

const styles = StyleSheet.create({
	inputContainer: {
		marginBottom: 20,
	},
	textStyle: {
		color: COLORS.white,
		fontSize: 16,
		fontFamily: 'Nunito_600SemiBold',
		marginHorizontal: 10,
	},
	inputTextField: {
		color: COLORS.white,
		fontFamily: 'Nunito_400Regular',
		marginTop: 5,
		flex: 1,
		backgroundColor: COLORS.light_blue,
		padding: 10,
		borderRadius: 15,
		fontSize: 16,
	},
});
