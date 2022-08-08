import React from "react";
import { Icon, IconProps } from "../Icon";

export type OutletLineProps = Omit<IconProps, "name">;

export const OutletLine = (props: OutletLineProps) => (
  <Icon name="outlet-line" {...props} />
);
