import * as React from "react";
import { Image, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text } from "../../components/Themed";

import styles from "./styles";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  const navigation = useNavigation();

  const onMoviePress = (movie: { id: any; poster?: string }) => {
    navigation.navigate("MovieDetailScreen", { id: movie.id });
  };

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        horizontal
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            />
          </Pressable>
        )}
      />
    </>
  );
};

export default HomeCategory;
