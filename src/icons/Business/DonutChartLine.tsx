import React from "react";
import { Icon, IconProps } from "../Icon";

export type DonutChartLineProps = Omit<IconProps, "name">;

export const DonutChartLine = (props: DonutChartLineProps) => (
  <Icon name="donut-chart-line" {...props} />
);
