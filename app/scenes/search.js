import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { bigglesworth } from '../assets'
import { Button, Main, TextBox } from '../components'
import { segment } from '../lib'
import { Colors, Layout } from '../styles'

class Search extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    query: ''
  }

  componentDidMount() {
    segment.screen('search')
  }

  search = () => {
    const { query } = this.state

    if (query) {
      const { navigation: { navigate } } = this.props

      navigate('results', {
        query
      })
    }
  }

  render() {
    const { query } = this.state

    return (
      <Main>
        <Main style={styles.main}>
          <Image style={styles.bigglesworth} source={bigglesworth} />
          <Text style={styles.about}>
            Mr Bigglesworth helps you find World of Warcraft information on the
            go
          </Text>
        </Main>
        <View style={styles.search}>
          <TextBox
            style={styles.textbox}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            onChangeText={query => this.setState({ query })}
            onSubmitEditing={this.search}
            placeholder="Gul'dan"
            returnKeyType="search"
            value={query}
          />
          <Button label="Search" onPress={this.search} />
        </View>
      </Main>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '20%'
  },
  bigglesworth: {
    height: 200 / 2,
    width: 208 / 2
  },
  about: {
    color: Colors.textDark,
    lineHeight: 20,
    marginTop: Layout.margin,
    textAlign: 'center'
  },
  search: {
    padding: Layout.margin
  },
  textbox: {
    marginBottom: Layout.margin
  }
})

export default connect()(Search)
