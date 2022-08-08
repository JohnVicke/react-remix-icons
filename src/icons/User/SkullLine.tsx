import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkullLineProps = Omit<IconProps, "name">;

export const SkullLine = (props: SkullLineProps) => (
  <Icon name="skull-line" {...props} />
);
