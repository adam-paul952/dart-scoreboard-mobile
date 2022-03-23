import React from "react";
import { StyleSheet } from "react-native";

import { ListItem } from "react-native-elements";

interface ICustomAccordianProps {
  title: string;
  children: React.ReactNode;
}

const CustomAccordian = (props: ICustomAccordianProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  return (
    <ListItem.Accordion
      content={
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{props.title}</ListItem.Title>
          {expanded && props.children}
        </ListItem.Content>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    ></ListItem.Accordion>
  );
};

export default CustomAccordian;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: "5%",
  },
});
