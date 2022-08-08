import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home5LineProps = Omit<IconProps, "name">;

export const Home5Line = (props: Home5LineProps) => (
  <Icon name="home-5-line" {...props} />
);
