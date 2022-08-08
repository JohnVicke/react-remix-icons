import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyCnyCircleFillProps = Omit<IconProps, "name">;

export const MoneyCnyCircleFill = (props: MoneyCnyCircleFillProps) => (
  <Icon name="money-cny-circle-fill" {...props} />
);
