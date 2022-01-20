import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import LikesList from '../../components/LikesList';
import { useRoute } from '@react-navigation/native';
import COLORS from '../../themes/theme';

const Likes = () => {
	const route = useRoute();
	let likes = route.params.likes;

	return (
		<View style={{ backgroundColor: COLORS.dark_blue, flex: 1 }}>
			<View
				style={{
					backgroundColor: COLORS.light_blue,
					padding: 5,
					borderRadius: 10,
					marginHorizontal: 15,
					marginBottom: 10,
				}}
			>
				<TextInput
					style={{
						color: COLORS.white,
						padding: 4,
						paddingLeft: 10,
						fontFamily: 'Nunito_400Regular',
					}}
					placeholder='Search User'
					placeholderTextColor={COLORS.white}
					multiline={true}
					numberOfLines={1}
				/>
			</View>
			<ScrollView>
				<LikesList likes={likes} />
			</ScrollView>
		</View>
	);
};

export default Likes;

const styles = StyleSheet.create({});
