import React from "react";
import { Image, Pressable } from "react-native";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";
import { Text, View } from "../../components/Themed";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import movie from "../../assets/data/movie";
const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <View style={{ padding: 12 }}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.match}>98% match</Text>
          <Text style={styles.year}>{movie.year}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
          </View>
          <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
          <MaterialIcons name="hd" size={24} color="white" />
        </View>
        {/* Play button*/}
        <Pressable
          onPress={() => {
            console.warn("Plage");
          }}
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>
            <Entypo name="controller-play" size={16} color="black" />
            Play
          </Text>
        </Pressable>
        {/*Download Button*/}
        <Pressable
          onPress={() => {
            console.warn("Plage");
          }}
          style={styles.downloadButton}
        >
          <Text style={styles.downloadButtonText}>
            <AntDesign name="download" size={16} color="white" /> Download
          </Text>
        </Pressable>
        <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
        <Text style={styles.year}>Cast: {movie.cast}</Text>
        <Text style={styles.year}>Creator: {movie.creator}</Text>
        {/* Row with icon buttons*/}
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <AntDesign name="plus" size={24} color="white" />
            <Text style={{ color: "darkgray", marginTop: 5 }}>My List</Text>
          </View>
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <Feather name="thumbs-up" size={24} color="white" />
            <Text style={{ color: "darkgray", marginTop: 5 }}>Rate</Text>
          </View>
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <Entypo name="share" size={24} color="white" />
            <Text style={{ color: "darkgray", marginTop: 5 }}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetailScreen;
