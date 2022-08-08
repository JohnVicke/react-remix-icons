import React from "react";
import { Icon, IconProps } from "../Icon";

export type LeafLineProps = Omit<IconProps, "name">;

export const LeafLine = (props: LeafLineProps) => (
  <Icon name="leaf-line" {...props} />
);
