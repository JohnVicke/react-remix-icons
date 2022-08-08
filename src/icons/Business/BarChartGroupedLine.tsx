import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChartGroupedLineProps = Omit<IconProps, "name">;

export const BarChartGroupedLine = (props: BarChartGroupedLineProps) => (
  <Icon name="bar-chart-grouped-line" {...props} />
);
