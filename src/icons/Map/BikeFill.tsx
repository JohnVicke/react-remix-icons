import React from "react";
import { Icon, IconProps } from "../Icon";

export type BikeFillProps = Omit<IconProps, "name">;

export const BikeFill = (props: BikeFillProps) => (
  <Icon name="bike-fill" {...props} />
);
