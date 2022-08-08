import React from "react";
import { Icon, IconProps } from "../Icon";

export type DropFillProps = Omit<IconProps, "name">;

export const DropFill = (props: DropFillProps) => (
  <Icon name="drop-fill" {...props} />
);
