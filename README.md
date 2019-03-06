打开控制台
 1 第一步 gulp

 2:npm start
 
 import React, {
    Component
} from "react";

import {
    Modal,
    Text,
    View,
    Image,
    Picker,
    Dimensions,
    StyleSheet,
    ScrollView,
    DeviceInfo,
    Keyboard,
    Platform,
    NativeModules,
    TouchableOpacity,
} from "react-native";

const {
    width,
    height
} = Dimensions.get('window');

const X_WIDTH = 375;
const X_HEIGHT = 812;

const {
    PlatformConstants = {}
} = NativeModules;

const {
    minor = 0
} = PlatformConstants.reactNativeVersion || {};


const isIphoneX = () => {

    if (Platform.OS === 'web') return false;
    if (minor >= 50) {
        return DeviceInfo.isIPhoneX_deprecated;
    }
    return (
        Platform.OS === 'ios' &&
        ((width === X_HEIGHT && width === X_WIDTH) ||
            (width === X_WIDTH && width === X_HEIGHT))
    );
};
