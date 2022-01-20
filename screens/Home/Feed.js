import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { feed } from '../../data/feed';
import { stories } from '../../data/stories';
import COLORS from '../../themes/theme';
import { LogBox } from 'react-native';
import FeedList from '../../components/FeedList';
import StoriesList from '../../components/StoriesList';
import { useDispatch, useSelector } from 'react-redux';
import { get_posts } from '../../redux/actions/postsActions';

const Feed = () => {
	const dispatch = useDispatch();
	const { posts } = useSelector((state) => state.posts);
	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);

	useEffect(() => {
		dispatch(get_posts(feed));
		console.log(feed);
		console.log(posts);
	}, []);
	return (
		<ScrollView
			style={{ backgroundColor: COLORS.dark_blue, flex: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<View style={{ marginTop: 0, marginBottom: 55 }}>
				<Text
					style={{
						marginLeft: 10,
						marginBottom: 5,
						color: COLORS.white,
						fontSize: 20,
						fontFamily: 'Nunito_600SemiBold',
					}}
				>
					Stories
				</Text>
				<StoriesList stories={stories} />
				{posts.length > 0 && <FeedList feed={posts} />}
			</View>
		</ScrollView>
	);
};

export default Feed;

const styles = StyleSheet.create({});
