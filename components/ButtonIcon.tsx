import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  Foundation,
} from '@expo/vector-icons';
import React from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface BaseIconProps {
  color: string;
  size: number;
  style?: StyleProp<TextStyle | ViewStyle>;
}
type AntDesignIconProps = BaseIconProps & {
  name: React.ComponentProps<typeof AntDesign>['name'];
};
type EntypoIconProps = BaseIconProps & {
  name: React.ComponentProps<typeof Entypo>['name'];
};
type FeatherIconProps = BaseIconProps & {
  name: React.ComponentProps<typeof Feather>['name'];
};
type FontAwesome5IconProps = BaseIconProps & {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
};
type FoundationIconProps = BaseIconProps & {
  name: React.ComponentProps<typeof Foundation>['name'];
};
type IonIconProps = BaseIconProps & {
  name: React.ComponentProps<typeof Ionicons>['name'];
};
type MaterialCommunityIconProps = BaseIconProps & {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};
type IconProps =
  | AntDesignIconProps
  | FeatherIconProps
  | FontAwesome5IconProps
  | IonIconProps
  | MaterialCommunityIconProps
  | EntypoIconProps
  | FoundationIconProps;

type ButtonIconProps = IconProps & {
  IconComponent: React.ElementType;
};

export const ButtonIcon = ({
  IconComponent,
  name,
  color,
  size,
  style,
}: ButtonIconProps) => (
  <IconComponent
    style={style ? style : styles.iconStyle}
    {...{ size, color, name }}
  />
);

const styles = StyleSheet.create({
  iconStyle: {
    marginTop: 20,
  },
});
