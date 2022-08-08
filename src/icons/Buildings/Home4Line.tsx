import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home4LineProps = Omit<IconProps, "name">;

export const Home4Line = (props: Home4LineProps) => (
  <Icon name="home-4-line" {...props} />
);
