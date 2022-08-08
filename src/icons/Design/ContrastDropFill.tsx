import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContrastDropFillProps = Omit<IconProps, "name">;

export const ContrastDropFill = (props: ContrastDropFillProps) => (
  <Icon name="contrast-drop-fill" {...props} />
);
