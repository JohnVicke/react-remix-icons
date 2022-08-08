import React from "react";
import { Icon, IconProps } from "../Icon";

export type CakeFillProps = Omit<IconProps, "name">;

export const CakeFill = (props: CakeFillProps) => (
  <Icon name="cake-fill" {...props} />
);
