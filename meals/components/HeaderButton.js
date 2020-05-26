import React from 'react';
import {Text, View} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => (
  <HeaderButton {...props} IconComponent={Icon} iconSize={23} color="white" />
);

export default CustomHeaderButton;
