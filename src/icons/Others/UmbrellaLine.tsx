import React from "react";
import { Icon, IconProps } from "../Icon";

export type UmbrellaLineProps = Omit<IconProps, "name">;

export const UmbrellaLine = (props: UmbrellaLineProps) => (
  <Icon name="umbrella-line" {...props} />
);
