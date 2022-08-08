import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChartHorizontalLineProps = Omit<IconProps, "name">;

export const BarChartHorizontalLine = (props: BarChartHorizontalLineProps) => (
  <Icon name="bar-chart-horizontal-line" {...props} />
);
