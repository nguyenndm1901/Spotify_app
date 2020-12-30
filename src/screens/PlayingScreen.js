import React, { Component } from 'react';
import { 
    StyleSheet, 
    Image, 
    View, 
    Text, 
    Dimensions, 
    ScrollView, 
    StatusBar,
    TouchableOpacity,
  } from 'react-native';

const Header = ({
    message,
    onDownPress,
    onQueuePress,
    onMessagePress,
}) => (
    <View style={stylesHeader.container}>
        <TouchableOpacity onPress={onDownPress}>
            <Image style={stylesHeader.button}
                source={require('../components/assets/icon/ic_keyboard_arrow_down_white.png')} />
        </TouchableOpacity>
        <Text onPress={onMessagePress}
            style={stylesHeader.message}>{message.toUpperCase()}</Text>
        <TouchableOpacity onPress={onQueuePress}>
            <Image style={stylesHeader.button}
                source={require('../components/assets/icon/ic_queue_music_white.png')} />
        </TouchableOpacity>
    </View>
);

const stylesHeader = StyleSheet.create({
    container: {
        height: 72,
        paddingTop: 20,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
    },
    message: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.72)',
        fontWeight: 'bold',
        fontSize: 10,
    },
    button: {
        opacity: 0.72
    }
});

var Slider = require('react-native-slider').default;

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

const SeekBar = ({
  trackLength,
  currentPosition,
  onSeek,
  onSlidingStart,
}) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  return (
    <View style={stylesSeekBar.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={stylesSeekBar.text}>
          {elapsed[0] + ":" + elapsed[1]}
        </Text>
        <View style={{flex: 1}} />
        <Text style={[stylesSeekBar.text, {width: 40}]}>
          {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
        </Text>
      </View>
      <Slider
        maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        style={stylesSeekBar.slider}
        minimumTrackTintColor='#fff'
        maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
        thumbStyle={stylesSeekBar.thumb}
        trackStyle={stylesSeekBar.track}/>
    </View>
  );
};

const stylesSeekBar = StyleSheet.create({
  slider: {
    marginTop: -12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign:'center',
  }
});

const Controls = ({ paused, shuffleOn, repeatOn, onPressPlay, onPressPause, onBack, onForward, onPressShuffle, onPressRepeat, forwardDisabled }) => (
    <View style={stylesControl.container}>
      <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
        <Image style={[stylesControl.secondaryControl, shuffleOn ? [] : stylesControl.off]}
          source={require('../components/assets/icon/ic_shuffle_white.png')} />
      </TouchableOpacity>
      <View style={{ width: 40 }} />
      <TouchableOpacity onPress={onBack}>
        <Image source={require('../components/assets/icon/ic_skip_previous_white_36pt.png')} />
      </TouchableOpacity>
      <View style={{ width: 20 }} />
      {!paused ?
        <TouchableOpacity onPress={onPressPause}>
          <View style={stylesControl.playButton}>
            <Image source={require('../components/assets/icon/ic_pause_white_48pt.png')} />
          </View>
        </TouchableOpacity> :
        <TouchableOpacity onPress={onPressPlay}>
          <View style={stylesControl.playButton}>
            <Image source={require('../components/assets/icon/ic_play_arrow_white_48pt.png')} />
          </View>
        </TouchableOpacity>
      }
      <View style={{ width: 20 }} />
      <TouchableOpacity onPress={onForward}
        disabled={forwardDisabled}>
        <Image style={[forwardDisabled && { opacity: 0.3 }]}
          source={require('../components/assets/icon/ic_skip_next_white_36pt.png')} />
      </TouchableOpacity>
      <View style={{ width: 40 }} />
      <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
        <Image style={[stylesControl.secondaryControl, repeatOn ? [] : stylesControl.off]}
          source={require('../components/assets/icon/ic_repeat_white.png')} />
      </TouchableOpacity>
    </View>
  );
  
  const stylesControl = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 8,
    },
    playButton: {
      height: 72,
      width: 72,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 72 / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryControl: {
      height: 18,
      width: 18,
    },
    off: {
      opacity: 0.30,
    }
  });

  const TrackDetails = ({
    title,
    artist,
    onAddPress,
    onMorePress,
    onTitlePress,
    onArtistPress,
  }) => (
    <View style={stylesTrack.container}>
      <TouchableOpacity onPress={onAddPress}>
        <Image style={stylesTrack.button}
          source={require('../components/assets/icon/ic_add_circle_outline_white.png')} />
      </TouchableOpacity>
      <View style={stylesTrack.detailsWrapper}>
        <Text style={stylesTrack.title} onPress={onTitlePress}>{title}</Text>
        <Text style={stylesTrack.artist} onPress={onArtistPress}>{artist}</Text>
      </View>
      <TouchableOpacity onPress={onMorePress}>
        <View style={stylesTrack.moreButton}>
          <Image style={stylesTrack.moreButtonIcon}
            source={require('../components/assets/icon/ic_more_horiz_white.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
  
  const stylesTrack = StyleSheet.create({
    container: {
      paddingTop: 24,
      flexDirection: 'row',
      paddingLeft: 20,
      alignItems: 'center',
      paddingRight: 20,
    },
    detailsWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    },
    artist: {
      color: 'rgba(255, 255, 255, 0.72)',
      fontSize: 12,
      marginTop: 4,
    },
    button: {
      opacity: 0.72,
    },
    moreButton: {
      borderColor: 'rgb(255, 255, 255)',
      borderWidth: 2,
      opacity: 0.72,
      borderRadius: 10,
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    moreButtonIcon: {
      height: 17,
      width: 17,
    }
  });

  const AlbumArt = ({
    url,
    onPress
  }) => (
    <View style={stylesAlbum.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={stylesAlbum.image}
          source={{uri: url}}
        />
      </TouchableOpacity>
    </View>
  );
  
  const { width, height } = Dimensions.get('window');
  const imageSize = width - 48;
  
  const stylesAlbum = StyleSheet.create({
    container: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    image: {
      width: imageSize,
      height: imageSize,
    },
  });

class PlayingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message="Playing from Charts" />
                <AlbumArt url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" />
                <TrackDetails title="Stressed Out"
                    artist="Twenty One Pilots" />
                <SeekBar trackLength={204} currentPosition={0} />
                <Controls />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
    },
});

export default PlayingScreen;