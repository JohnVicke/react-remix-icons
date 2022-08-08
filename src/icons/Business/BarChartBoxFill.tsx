import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChartBoxFillProps = Omit<IconProps, "name">;

export const BarChartBoxFill = (props: BarChartBoxFillProps) => (
  <Icon name="bar-chart-box-fill" {...props} />
);
