import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Title } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons'

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    return (
      <Container>
        <Header hasTab style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#1DB954' }}>
          <Title>Music App</Title>
        </Header>
        <Tabs tabBarPosition="overlayBottom">
          <Tab heading="Top" tabStyle={{ backgroundColor: '#1DB954' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#1DB954', fontWeight: 'bold' }}>
            <Tab1 />
          </Tab>
          <Tab heading="Recom" tabStyle={{ backgroundColor: '#1DB954' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#1DB954', fontWeight: 'bold' }}>
            <Tab2 />
          </Tab>
          <Tab heading="Lists" tabStyle={{ backgroundColor: '#1DB954' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#1DB954', fontWeight: 'bold' }}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default App
