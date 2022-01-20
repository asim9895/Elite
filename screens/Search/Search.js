import React, { useState, useMemo, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlatList,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native';

import { search_categories } from '../../data/search_categories';
import COLORS from '../../themes/theme';
import MasonryList from '@react-native-seoul/masonry-list';
import { search_feed } from '../../data/search_feed';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const Search = ({ navigation }) => {
	const [option, set_option] = useState(search_categories[0]);
	const [images, setimages] = useState(search_feed);

	useEffect(() => {
		if (option?.name === 'all') {
			return setimages(search_feed);
		} else {
			let data = search_feed.filter((sfd) => {
				return sfd.category === option.name;
			});
			return setimages(data);
		}
	}, [option]);
	return (
		<View style={{ backgroundColor: COLORS.dark_blue, flex: 1 }}>
			<View style={{ marginTop: 10, marginBottom: 15 }}>
				<FlatList
					data={search_categories}
					horizontal
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => set_option(item)}>
							<View
								style={{
									padding: 3,
									marginLeft: 10,
									marginRight: 5,
									paddingVertical: 5,
									paddingHorizontal: 8,
									backgroundColor:
										option?.id === item?.id
											? COLORS.primary
											: COLORS.light_blue,
									borderRadius: 10,
								}}
							>
								<Text
									style={{
										color: COLORS.white,
										fontSize: 15,
										fontFamily: 'Nunito_600SemiBold',
										textTransform: 'capitalize',
									}}
								>
									{item.name}
								</Text>
							</View>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
			<ScrollView style={{ marginBottom: 60 }}>
				<MasonryList
					data={images}
					style={{ alignSelf: 'stretch', marginHorizontal: 7 }}
					keyExtractor={(item, index) => index.toString()}
					numColumns={3}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate('SinglePost', { item })}
							key={item.id}
						>
							<View key={item.id}>
								<Image
									source={{
										uri: item.image,
									}}
									style={{
										height: item.resize_number > 0 ? 150 : 180,
										borderRadius: 10,
										alignSelf: 'stretch',
										margin: 2,
									}}
									resizeMode='cover'
								/>
							</View>
						</TouchableOpacity>
					)}
				/>
			</ScrollView>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	input: {},
});
