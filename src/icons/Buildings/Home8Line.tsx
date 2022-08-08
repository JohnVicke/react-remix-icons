import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home8LineProps = Omit<IconProps, "name">;

export const Home8Line = (props: Home8LineProps) => (
  <Icon name="home-8-line" {...props} />
);
