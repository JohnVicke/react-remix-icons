import React from "react";
import { Icon, IconProps } from "../Icon";

export type FundsBoxFillProps = Omit<IconProps, "name">;

export const FundsBoxFill = (props: FundsBoxFillProps) => (
  <Icon name="funds-box-fill" {...props} />
);
