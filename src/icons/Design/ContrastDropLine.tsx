import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContrastDropLineProps = Omit<IconProps, "name">;

export const ContrastDropLine = (props: ContrastDropLineProps) => (
  <Icon name="contrast-drop-line" {...props} />
);
