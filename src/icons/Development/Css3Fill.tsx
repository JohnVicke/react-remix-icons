import React from "react";
import { Icon, IconProps } from "../Icon";

export type Css3FillProps = Omit<IconProps, "name">;

export const Css3Fill = (props: Css3FillProps) => (
  <Icon name="css3-fill" {...props} />
);
