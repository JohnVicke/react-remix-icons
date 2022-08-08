import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home7FillProps = Omit<IconProps, "name">;

export const Home7Fill = (props: Home7FillProps) => (
  <Icon name="home-7-fill" {...props} />
);
