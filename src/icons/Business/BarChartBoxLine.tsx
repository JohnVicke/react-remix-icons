import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChartBoxLineProps = Omit<IconProps, "name">;

export const BarChartBoxLine = (props: BarChartBoxLineProps) => (
  <Icon name="bar-chart-box-line" {...props} />
);
