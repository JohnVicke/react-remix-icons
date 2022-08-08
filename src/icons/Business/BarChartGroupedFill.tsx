import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChartGroupedFillProps = Omit<IconProps, "name">;

export const BarChartGroupedFill = (props: BarChartGroupedFillProps) => (
  <Icon name="bar-chart-grouped-fill" {...props} />
);
