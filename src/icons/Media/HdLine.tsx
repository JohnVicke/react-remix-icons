import React from "react";
import { Icon, IconProps } from "../Icon";

export type HdLineProps = Omit<IconProps, "name">;

export const HdLine = (props: HdLineProps) => (
  <Icon name="hd-line" {...props} />
);
