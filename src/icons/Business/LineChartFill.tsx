import React from "react";
import { Icon, IconProps } from "../Icon";

export type LineChartFillProps = Omit<IconProps, "name">;

export const LineChartFill = (props: LineChartFillProps) => (
  <Icon name="line-chart-fill" {...props} />
);
