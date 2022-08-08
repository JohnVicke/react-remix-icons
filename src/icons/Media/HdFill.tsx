import React from "react";
import { Icon, IconProps } from "../Icon";

export type HdFillProps = Omit<IconProps, "name">;

export const HdFill = (props: HdFillProps) => (
  <Icon name="hd-fill" {...props} />
);
