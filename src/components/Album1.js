import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const album_image_1 = require('./assets/album1/album_image_1.png');
const album_image_2 = require('./assets/album1/album_image_2.png');
const album_image_3 = require('./assets/album1/album_image_3.png');
const album_image_4 = require('./assets/album1/album_image_4.png');
const album_image_5 = require('./assets/album1/album_image_5.png');
const album_image_6 = require('./assets/album1/album_image_6.png');

const AlbumItem = ({ image, name, author }) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>{name}</Text>
    <Text style={styles.itemAuthor} numberOfLines={1}>{author}</Text>
  </View>
);

const Album1 = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text style={styles.headerStyle}>
          Made for you
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.listAlbum}>
          {/*  */}
          <TouchableOpacity
            onPress={() => { navigation.navigate("DailyMix1") }}>
            <View>
              <AlbumItem
                name="Daily Mix 1"
                image={album_image_1}
                author="Shawn Mendes, Ed Sheeran"
              />
            </View>
          </TouchableOpacity>
          {/*  */}
          <View>
            <AlbumItem
              name="Daily Mix 2"
              image={album_image_2}
              author="The Chainsmokers, Clean Bandit"
            />
          </View>
          {/*  */}
          <View>
            <AlbumItem
              name="Daily Mix 3"
              image={album_image_3}
              author="Taylor Swift, Selena Gomez"
            />
          </View>
          {/*  */}
          <View>
            <AlbumItem
              name="Daily Mix 4"
              image={album_image_4}
              author="Bazzi, Ariana Grande"
            />
          </View>
          {/*  */}
          <View>
            <AlbumItem
              name="Daily Mix 5"
              image={album_image_5}
              author="Post Malone, XXXTENTACION"
            />
          </View>
          {/*  */}
          <View>
            <AlbumItem
              name="Daily Mix 6"
              image={album_image_6}
              author="Becky G, Jhay Cortez"
            />
          </View>
          {/*  */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Album1;

const styles = StyleSheet.create({
  screenCover: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 4,
    paddingHorizontal: 10,
    fontSize: 28,
    color: 'white',
    fontWeight: "500",
    fontFamily: 'Arial'
  },
  listAlbum: {
    flexDirection: 'row',
    padding: 10,
  },
  itemContainer: {
    width: 100,
    marginRight: 130,
    marginTop: 10,
  },
  itemImage: {
    width: 216,
    height: 216,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
    color: '#fafafa',
    width: 216,
    fontFamily: 'Arial',
    paddingTop: 5,
  },
  itemAuthor: {
    fontSize: 14,
    color: '#919191',
    width: 216,
    fontFamily: 'Arial'
  },
});