import React from "react";
import { Icon, IconProps } from "../Icon";

export type FundsBoxLineProps = Omit<IconProps, "name">;

export const FundsBoxLine = (props: FundsBoxLineProps) => (
  <Icon name="funds-box-line" {...props} />
);
