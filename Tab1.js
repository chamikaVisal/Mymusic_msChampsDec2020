import React, { Component } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { Container, Header, Content, Thumbnail, Text, Left, Body, Right } from 'native-base';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'

export default class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topdetails: []

        };
    }
    componentDidMount() {
        const url = 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US'

        fetch(url, {
            headers: {

                "x-rapidapi-key": "755bab29c1msh3e6c319b829be4ap12d974jsn9c041cf723be",
                "x-rapidapi-host": "shazam.p.rapidapi.com",
                "useQueryString": true
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    topdetails: responseJson.tracks,

                })
                console.log(this.state.topdetails)

            })

    }

    render() {
        const td = this.state.topdetails
        return (
            <ScrollView>

                <View>
                    {
                        td.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.share.image } }}
                                title={l.title}
                                subtitle={l.share.subject}
                                bottomDivider
                            />
                        ))
                    }
                </View>


            </ScrollView>
        )
    }
}
