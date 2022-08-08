import React from "react";
import { Icon, IconProps } from "../Icon";

export type LeafFillProps = Omit<IconProps, "name">;

export const LeafFill = (props: LeafFillProps) => (
  <Icon name="leaf-fill" {...props} />
);
