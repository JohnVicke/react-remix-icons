import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyCnyBoxLineProps = Omit<IconProps, "name">;

export const MoneyCnyBoxLine = (props: MoneyCnyBoxLineProps) => (
  <Icon name="money-cny-box-line" {...props} />
);
