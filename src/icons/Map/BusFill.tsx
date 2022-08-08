import React from "react";
import { Icon, IconProps } from "../Icon";

export type BusFillProps = Omit<IconProps, "name">;

export const BusFill = (props: BusFillProps) => (
  <Icon name="bus-fill" {...props} />
);
