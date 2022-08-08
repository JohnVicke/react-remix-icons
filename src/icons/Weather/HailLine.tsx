import React from "react";
import { Icon, IconProps } from "../Icon";

export type HailLineProps = Omit<IconProps, "name">;

export const HailLine = (props: HailLineProps) => (
  <Icon name="hail-line" {...props} />
);
