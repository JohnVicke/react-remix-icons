import React from "react";
import { Icon, IconProps } from "../Icon";

export type IndentIncreaseProps = Omit<IconProps, "name">;

export const IndentIncrease = (props: IndentIncreaseProps) => (
  <Icon name="indent-increase" {...props} />
);
