import React from "react";
import { Icon, IconProps } from "../Icon";

export type DonutChartFillProps = Omit<IconProps, "name">;

export const DonutChartFill = (props: DonutChartFillProps) => (
  <Icon name="donut-chart-fill" {...props} />
);
