import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import COLORS from '../themes/theme';

const LikesList = ({ likes }) => {
	return (
		<View>
			<FlatList
				data={likes}
				vertical
				renderItem={({ item, index }) => (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginHorizontal: 15,
							padding: 10,
						}}
						key={item.id}
					>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image
								source={{ uri: item?.profile_pic }}
								style={{
									width: 40,
									height: 40,
									borderRadius: 15,
									backgroundColor: COLORS.light_blue,
									marginRight: 10,
								}}
							/>
							<Text
								style={{
									color: COLORS.white,
									fontSize: 15,
									fontFamily: 'Nunito_600SemiBold',
									textTransform: 'capitalize',
								}}
							>
								{item?.name}
							</Text>
						</View>
						<Text
							style={{
								color: COLORS.gray,
								fontSize: 15,
								fontFamily: 'Nunito_400Regular',
								textTransform: 'capitalize',
							}}
						>
							{item?.time}
						</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default LikesList;

const styles = StyleSheet.create({});
