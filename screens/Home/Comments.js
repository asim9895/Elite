import React from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import CommentsList from '../../components/CommentsList';
import COLORS from '../../themes/theme';
import { useRoute } from '@react-navigation/native';

const Comments = () => {
	const route = useRoute();
	let comments = route.params.comments;
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
				<CommentsList comments={comments} />
			</ScrollView>
		</View>
	);
};

export default Comments;

const styles = StyleSheet.create({});
