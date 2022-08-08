import React from "react";
import { Icon, IconProps } from "../Icon";

export type FundsLineProps = Omit<IconProps, "name">;

export const FundsLine = (props: FundsLineProps) => (
  <Icon name="funds-line" {...props} />
);
