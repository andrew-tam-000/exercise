import React from 'react';
import { StyleSheet, Picker } from 'react-native';

export default class BodyPartPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: null
        };
    }

    onValueChanged(selection) {
        console.log(selection);
        this.setState({ selection });
    }

    render() {
        return (
            <Picker
                style={{justifyContent: 'center',backgroundColor: 'white', width: 100}}
                selectedValue={this.state.selection}
                onValueChange={this.onValueChanged}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript1" value="js2" />
                <Picker.Item label="JavaScript2" value="js3" />
                <Picker.Item label="JavaScript3" value="js4" />
                <Picker.Item label="JavaScript3" value="js4" />
                <Picker.Item label="JavaScript3" value="js4" />
                <Picker.Item label="JavaScript3" value="js4" />
                <Picker.Item label="JavaScript3" value="js4" />
                <Picker.Item label="JavaScript3" value="js4" />
            </Picker>
        );
    }
}
