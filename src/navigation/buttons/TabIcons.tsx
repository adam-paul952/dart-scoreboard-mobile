import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const TabBarIconRules = (props: {
  name: React.ComponentProps<typeof Entypo>["name"];
  color: string;
}) => {
  return <Entypo size={30} style={{ marginBottom: -3 }} {...props} />;
};

export const TabBarIconHome = (props: {
  name: React.ComponentProps<typeof Foundation>["name"];
  color: string;
}) => {
  return <Foundation size={30} style={{ marginBottom: -3 }} {...props} />;
};
