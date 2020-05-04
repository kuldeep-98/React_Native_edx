import React from 'react'
import { Button, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
})

export class App extends React.Component {
    state = {
        showContacts: false
    }

    toggleContact = () => {
        this.setState(prevState =>
            ({
                showContacts: !prevState.showContacts
            })
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.toggleContact} title="toggle" />
            </View>
        )
    }
}

