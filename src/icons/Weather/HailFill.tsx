import React from "react";
import { Icon, IconProps } from "../Icon";

export type HailFillProps = Omit<IconProps, "name">;

export const HailFill = (props: HailFillProps) => (
  <Icon name="hail-fill" {...props} />
);
