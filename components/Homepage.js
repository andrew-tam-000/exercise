import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DefaultTextView, CustomizableTextView } from '~/components/index';

const Homepage = () => (
    <View>
        <DefaultTextView />
        <CustomizableTextView text="Howdy" />
    </View>
);

export default Homepage;
