import React from "react";
import { Icon, IconProps } from "../Icon";

export type EarthLineProps = Omit<IconProps, "name">;

export const EarthLine = (props: EarthLineProps) => (
  <Icon name="earth-line" {...props} />
);
