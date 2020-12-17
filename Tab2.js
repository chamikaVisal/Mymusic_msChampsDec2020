import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Button } from 'react-native'
import { Card, ListItem, Icon, Avatar } from 'react-native-elements'

export default class Tab2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recdetails: []

        };
    }
    componentDidMount() {
        const url = 'https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US'

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
                    recdetails: responseJson.tracks,

                })
                console.log(this.state.recdetails)

            })

    }
    list = () => {
        return this.state.recdetails.map((element) => {
            return (
                <View key={element.key} >
                    <Card>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Divider />
                        <Card.Image source={{ uri: element.share.image }} style={{ height: 300, width: 300 }} />
                        <Text style={{ marginBottom: 10 }}>
                            {element.share.subject}
                        </Text>
                        <Button
                            color="#1DB954"
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, }}
                            title='VIEW NOW' />
                    </Card>
                </View>
            );
        });
    };

    render() {
        return (
            <ScrollView>
                <View>{this.list()}</View>
            </ScrollView>
        )

    }

}
