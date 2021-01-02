import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText(newText){
        const {onChange} = this.props;

        this.setState({
            text: newText,
        }, () => {
            // step (5) here
            onChange && onChange(newText);
        });
    }

    render() {

        const {text} = this.state;

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={text}
                    underlineColorAndroid="transparent"
                    placeholder="Artists, songs, or podcasts"
                    placeholderTextColor="#808080"
                    autoCapitalize='characters'
                    textAlignVertical='center'
                    textAlignHorizontal='center'
                    onChangeText={newText => this.handleChangeText(newText)}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginBottom: 10,
        fontSize:20,
        textAlign: "center"
    },
    input: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 40,
    },
    container: {
        backgroundColor: 'white',
    },
});