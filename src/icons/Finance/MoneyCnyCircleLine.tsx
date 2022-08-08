import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyCnyCircleLineProps = Omit<IconProps, "name">;

export const MoneyCnyCircleLine = (props: MoneyCnyCircleLineProps) => (
  <Icon name="money-cny-circle-line" {...props} />
);
