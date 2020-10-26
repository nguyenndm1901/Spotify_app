import React from 'react';
import { 
  StyleSheet, 
  Image, 
  View, 
  Text, 
  Dimensions, 
  ScrollView, 
  StatusBar
} from 'react-native';

const {witdh} = Dimensions.get('window');

const album_image_1 = require('./assets/album2/album_image_1.png');
const album_image_2 = require('./assets/album2/album_image_2.png');
const album_image_3 = require('./assets/album2/album_image_3.png');
const album_image_4 = require('./assets/album2/album_image_4.png');
const album_image_5 = require('./assets/album2/album_image_5.png');
const album_image_6 = require('./assets/album2/album_image_6.png');

const AlbumItem = ({image, name, author}) => (
    <View style={styles.itemContainer}>
        <Image source={image} style={styles.itemImage} />
        <Text style={styles.itemName} numberOfLines={2}>{name}</Text>
        <Text style={styles.itemAuthor} numberOfLines={1}>{author}</Text>
    </View>
);

const Album2 = () => {
  return (
    <View>   
      <View>
        <Text style={styles.headerStyle}>
            Jazz in the background
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.listAlbum}>
          {/*  */}
          <View>
          <AlbumItem
              name="Lazy Jazz Cat"
              image={album_image_1}
              author="Instrumental jazz with a cool sound"
          />
          </View>
          {/*  */}
          <View>
          <AlbumItem
              name="Cocktail Jazz"
              image={album_image_2}
              author="Swinging jazz for your cocktail party"
          />
          </View>
          {/*  */}
          <View>
          <AlbumItem
              name="Chilled Jazz"
              image={album_image_3}
              author="Mellow jazz to stay focused or unwind"
          />
          </View>
          {/*  */}
          <View>
          <AlbumItem
              name="Peaceful Piano: American Songbook"
              image={album_image_4}
              author="Soft interpretations of songbook classics"
          />
          </View>
          {/*  */}
          <View>
          <AlbumItem
              name="The Piano Bar"
              image={album_image_5}
              author="A relaxing atmostphere of jazz piano sounds"
          />
          </View>
          {/*  */}
          <View>
          <AlbumItem
              name="Jazz in the Background"
              image={album_image_6}
              author="Soft jazz for all your activities"
          />
        </View>
        {/*  */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Album2;

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