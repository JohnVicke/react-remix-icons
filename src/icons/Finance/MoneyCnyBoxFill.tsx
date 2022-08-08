import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyCnyBoxFillProps = Omit<IconProps, "name">;

export const MoneyCnyBoxFill = (props: MoneyCnyBoxFillProps) => (
  <Icon name="money-cny-box-fill" {...props} />
);
