import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const DefaultTextView = () => (
    <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
    </View>
);

export const CustomizableTextView = ({ text }) => (
    <View>
        <Text>
            { text }
        </Text>
    </View>
);
