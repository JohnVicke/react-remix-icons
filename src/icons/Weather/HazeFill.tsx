import React from "react";
import { Icon, IconProps } from "../Icon";

export type HazeFillProps = Omit<IconProps, "name">;

export const HazeFill = (props: HazeFillProps) => (
  <Icon name="haze-fill" {...props} />
);
