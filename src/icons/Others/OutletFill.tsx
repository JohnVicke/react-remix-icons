import React from "react";
import { Icon, IconProps } from "../Icon";

export type OutletFillProps = Omit<IconProps, "name">;

export const OutletFill = (props: OutletFillProps) => (
  <Icon name="outlet-fill" {...props} />
);
