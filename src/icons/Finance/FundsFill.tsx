import React from "react";
import { Icon, IconProps } from "../Icon";

export type FundsFillProps = Omit<IconProps, "name">;

export const FundsFill = (props: FundsFillProps) => (
  <Icon name="funds-fill" {...props} />
);
