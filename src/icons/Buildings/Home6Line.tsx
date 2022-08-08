import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home6LineProps = Omit<IconProps, "name">;

export const Home6Line = (props: Home6LineProps) => (
  <Icon name="home-6-line" {...props} />
);
