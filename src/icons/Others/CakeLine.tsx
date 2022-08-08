import React from "react";
import { Icon, IconProps } from "../Icon";

export type CakeLineProps = Omit<IconProps, "name">;

export const CakeLine = (props: CakeLineProps) => (
  <Icon name="cake-line" {...props} />
);
