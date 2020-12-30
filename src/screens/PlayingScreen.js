import React from 'react';
import Header from '../components/Header';
import AlbumArt from '..components/AlbumArt';
import TrackDetails from '..components/TrackDetails';
import SeekBar from '..components/SeekBar';
import Controls from '..components/Controls';

class PlayingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message="Playing from Charts" />
                <AlbumArt url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" />
                <TrackDetails title="Stressed Out"
                    artist="Twenty One Pilots" />
                <SeekBar trackLength={204} currentPosition={156} />
                <Controls />
            </View>
        )
    }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: 'rgb(4,4,4)',
    },
  }

export default PlayingScreen;