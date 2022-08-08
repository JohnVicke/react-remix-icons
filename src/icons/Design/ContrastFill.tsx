import React from "react";
import { Icon, IconProps } from "../Icon";

export type ContrastFillProps = Omit<IconProps, "name">;

export const ContrastFill = (props: ContrastFillProps) => (
  <Icon name="contrast-fill" {...props} />
);
