import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

interface BaseIconProps {
  color: string;
  size: number;
}
type AntDesignIconProps = BaseIconProps & {
  name: React.ComponentProps<typeof AntDesign>['name'];
};
type FeatherIconProps = BaseIconProps & {
  name: React.ComponentProps<typeof Feather>['name'];
};
type FontAwesome5IconProps = BaseIconProps & {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
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
  | MaterialCommunityIconProps;

type IconButtonProps = IconProps & {
  IconComponent: React.ElementType;
};

export const IconButton = ({
  IconComponent,
  name,
  color,
  size,
}: IconButtonProps) => (
  <IconComponent style={styles.iconStyle} {...{ size, color, name }} />
);

// export const AntDesignIcon = ({ name, color, size }: AntDesignIconProps) => (
//   <AntDesign style={styles.iconStyle} {...{ name, color, size }} />
// );

// export const FeatherIcon = (props: {
//   name: React.ComponentProps<typeof Feather>['name'];
//   color: string;
//   size: number;
// }) => <Feather style={styles.iconStyle} {...props} />;

// export const FontAwesome5Icon = (props: {
//   name: React.ComponentProps<typeof FontAwesome5>['name'];
//   color: string;
//   size: number;
// }) => <FontAwesome5 style={styles.iconStyle} {...props} />;

// export const IonIcon = (props: {
//   name: React.ComponentProps<typeof Ionicons>['name'];
//   color: string;
//   size: number;
// }) => <Ionicons style={styles.iconStyle} {...props} />;

// export const MaterialCommunityIcon = (props: {
//   name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
//   color: string;
//   size: number;
// }) => <MaterialCommunityIcons style={styles.iconStyle} {...props} />;

const styles = StyleSheet.create({
  iconStyle: {
    marginTop: 20,
  },
});
