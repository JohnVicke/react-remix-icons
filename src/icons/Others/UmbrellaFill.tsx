import React from "react";
import { Icon, IconProps } from "../Icon";

export type UmbrellaFillProps = Omit<IconProps, "name">;

export const UmbrellaFill = (props: UmbrellaFillProps) => (
  <Icon name="umbrella-fill" {...props} />
);
