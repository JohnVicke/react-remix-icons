import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home6FillProps = Omit<IconProps, "name">;

export const Home6Fill = (props: Home6FillProps) => (
  <Icon name="home-6-fill" {...props} />
);
