import React from "react";
import { Icon, IconProps } from "../Icon";

export type BilibiliFillProps = Omit<IconProps, "name">;

export const BilibiliFill = (props: BilibiliFillProps) => (
  <Icon name="bilibili-fill" {...props} />
);
