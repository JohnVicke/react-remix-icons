import React from "react";
import { Icon, IconProps } from "../Icon";

export type PenNibFillProps = Omit<IconProps, "name">;

export const PenNibFill = (props: PenNibFillProps) => (
  <Icon name="pen-nib-fill" {...props} />
);
