import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home4FillProps = Omit<IconProps, "name">;

export const Home4Fill = (props: Home4FillProps) => (
  <Icon name="home-4-fill" {...props} />
);
