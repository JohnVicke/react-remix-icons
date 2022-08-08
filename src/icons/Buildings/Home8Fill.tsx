import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home8FillProps = Omit<IconProps, "name">;

export const Home8Fill = (props: Home8FillProps) => (
  <Icon name="home-8-fill" {...props} />
);
