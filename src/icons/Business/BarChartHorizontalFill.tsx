import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChartHorizontalFillProps = Omit<IconProps, "name">;

export const BarChartHorizontalFill = (props: BarChartHorizontalFillProps) => (
  <Icon name="bar-chart-horizontal-fill" {...props} />
);
