import React from "react";
import { Icon, IconProps } from "../Icon";

export type FoggyLineProps = Omit<IconProps, "name">;

export const FoggyLine = (props: FoggyLineProps) => (
  <Icon name="foggy-line" {...props} />
);
