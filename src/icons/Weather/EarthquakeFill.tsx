import React from "react";
import { Icon, IconProps } from "../Icon";

export type EarthquakeFillProps = Omit<IconProps, "name">;

export const EarthquakeFill = (props: EarthquakeFillProps) => (
  <Icon name="earthquake-fill" {...props} />
);
