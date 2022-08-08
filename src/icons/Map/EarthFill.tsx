import React from "react";
import { Icon, IconProps } from "../Icon";

export type EarthFillProps = Omit<IconProps, "name">;

export const EarthFill = (props: EarthFillProps) => (
  <Icon name="earth-fill" {...props} />
);
