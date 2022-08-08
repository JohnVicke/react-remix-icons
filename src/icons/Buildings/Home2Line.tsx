import React from "react";
import { Icon, IconProps } from "../Icon";

export type Home2LineProps = Omit<IconProps, "name">;

export const Home2Line = (props: Home2LineProps) => (
  <Icon name="home-2-line" {...props} />
);
