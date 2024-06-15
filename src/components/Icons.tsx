import React from "react";
import type { PropsWithChildren } from "react";

import { FontAwesome } from "@expo/vector-icons";

type IconsProps = PropsWithChildren<{
  name: string;
}>;
const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case "circle":
      return <FontAwesome name="circle-thin" size={38} color="#32ff7e" />;
      
    case "cross":
      return <FontAwesome name="times" size={38} color="#c56cf0" />;
      
    default:
      return <FontAwesome name="pencil" size={38} color="#ff3838" />;
  }
};
export default Icons;
