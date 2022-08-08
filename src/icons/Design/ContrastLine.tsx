import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContrastLineProps = Omit<IconProps, "name">;

export const ContrastLine = (props: ContrastLineProps) => (
  <Icon name="contrast-line" {...props} />
);
