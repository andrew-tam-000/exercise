import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { Tabs, Tab, Icon, FormInput } from 'react-native-elements';
import Homepage from '~/components/Homepage';
import BodyPartPicker from '~/components/BodyPartPicker';
import firebaseApp from '~/firebase/index';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { onChangeTest } from '~/redux/actions/firebase';

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
            <FormInput onChangeText={ val => props.onChange(val)} value={props.test}/>
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

const mapStateToProps = ({ firebase: { data }, }, auth, profile) => {
    return {
        test: data.test,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: value => dispatch(onChangeTest(value)),
    };
};

export default firebaseConnect([
    {
        path: 'test',
    },
])(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(
        ExerciseApp
    )
);
