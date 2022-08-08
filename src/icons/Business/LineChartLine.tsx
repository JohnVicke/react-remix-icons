import React from "react";
import { Icon, IconProps } from "../Icon";

export type LineChartLineProps = Omit<IconProps, "name">;

export const LineChartLine = (props: LineChartLineProps) => (
  <Icon name="line-chart-line" {...props} />
);
