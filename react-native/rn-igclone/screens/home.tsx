import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import Posts from "../components/Posts";
import Stories from "../components/Stories";

const stories = [
  {
    username: "kola",
    thumbnail: "https://source.unsplash.com/random",
    id: "1"
  },
  {
    username: "fola",
    thumbnail: "https://source.unsplash.com/random",
    id: "2"
  },
  {
    username: "tola",
    thumbnail: "https://source.unsplash.com/random",
    id: "3"
  },
  {
    username: "jola",
    thumbnail: "https://source.unsplash.com/random",
    id: "4"
  },
  {
    username: "eola",
    thumbnail: "https://source.unsplash.com/random",
    id: "5"
  },
  {
    username: "pola",
    thumbnail: "https://source.unsplash.com/random",
    id: "6"
  },
];

const posts = [{
  user: {
    name: "kola",
    avatar: "https://source.unsplash.com/random",
  },
  caption: "caption",
  description: "description",
  thumbnail: "https://source.unsplash.com/random",
  timestamp: "21 mins ago",
  id: "1"
},
{
  user: {
    name: "fola",
    avatar: "https://source.unsplash.com/random",
  },
  caption: "caption",
  description: "description",
  thumbnail: "https://source.unsplash.com/random",
  timestamp: "22 mins ago",
  id: "2"
},
{
  user: {
    name: "tola",
    avatar: "https://source.unsplash.com/random",
  },
  caption: "caption",
  description: "description",
  thumbnail: "https://source.unsplash.com/random",
  timestamp: "25 mins ago",
  id: "3"
}]

const Home: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stories}>
        <Stories stories={stories} />
      </View>
      <View style={styles.posts}>
        <Posts posts={posts} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '25%'
  },
  stories: {
    padding: 2,
  },
  posts: {
    padding: 2,
  },
})

export default Home;