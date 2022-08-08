import React from "react";
import { Icon, IconProps } from "../Icon";

export type FoggyFillProps = Omit<IconProps, "name">;

export const FoggyFill = (props: FoggyFillProps) => (
  <Icon name="foggy-fill" {...props} />
);
