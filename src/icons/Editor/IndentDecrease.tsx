import React from "react";
import { Icon, IconProps } from "../Icon";

export type IndentDecreaseProps = Omit<IconProps, "name">;

export const IndentDecrease = (props: IndentDecreaseProps) => (
  <Icon name="indent-decrease" {...props} />
);
