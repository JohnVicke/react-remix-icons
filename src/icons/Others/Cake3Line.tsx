import React from "react";
import { Icon, IconProps } from "../Icon";

export type Cake3LineProps = Omit<IconProps, "name">;

export const Cake3Line = (props: Cake3LineProps) => (
  <Icon name="cake-3-line" {...props} />
);
