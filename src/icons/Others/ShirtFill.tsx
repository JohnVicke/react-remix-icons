import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShirtFillProps = Omit<IconProps, "name">;

export const ShirtFill = (props: ShirtFillProps) => (
  <Icon name="shirt-fill" {...props} />
);
