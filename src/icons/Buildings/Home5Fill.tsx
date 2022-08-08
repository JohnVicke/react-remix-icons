import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home5FillProps = Omit<IconProps, "name">;

export const Home5Fill = (props: Home5FillProps) => (
  <Icon name="home-5-fill" {...props} />
);
