import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home3LineProps = Omit<IconProps, "name">;

export const Home3Line = (props: Home3LineProps) => (
  <Icon name="home-3-line" {...props} />
);
