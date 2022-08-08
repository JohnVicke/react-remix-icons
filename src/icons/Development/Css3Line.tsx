import React from "react";
import { Icon, IconProps } from "../Icon";

export type Css3LineProps = Omit<IconProps, "name">;

export const Css3Line = (props: Css3LineProps) => (
  <Icon name="css3-line" {...props} />
);
