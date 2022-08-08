import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home7LineProps = Omit<IconProps, "name">;

export const Home7Line = (props: Home7LineProps) => (
  <Icon name="home-7-line" {...props} />
);
