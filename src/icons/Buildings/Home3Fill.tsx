import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home3FillProps = Omit<IconProps, "name">;

export const Home3Fill = (props: Home3FillProps) => (
  <Icon name="home-3-fill" {...props} />
);
