import React from "react";
import { Icon, IconProps } from "../Icon";

export type PenNibLineProps = Omit<IconProps, "name">;

export const PenNibLine = (props: PenNibLineProps) => (
  <Icon name="pen-nib-line" {...props} />
);
