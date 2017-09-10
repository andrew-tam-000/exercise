import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { Tabs, Tab, Icon } from 'react-native-elements';
import Homepage from '~/components/Homepage';
import BodyPartPicker from '~/components/BodyPartPicker';
import firebaseApp from '~/firebase/index';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

const ExerciseApp = props => {
    console.log(props);
    return (
        <View style={styles.container}>
            <Header
                backgroundColor='gray'
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Homepage />
            <BodyPartPicker />
            <Homepage />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default firebaseConnect([
    {
        path: 'exercises',
    }
])(
    connect(
        ( { firebase: { data }, }, auth, profile ) => {
            return {
                data
            };
        }
    )(
        ExerciseApp
    )
);
