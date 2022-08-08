import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home2FillProps = Omit<IconProps, "name">;

export const Home2Fill = (props: Home2FillProps) => (
  <Icon name="home-2-fill" {...props} />
);
