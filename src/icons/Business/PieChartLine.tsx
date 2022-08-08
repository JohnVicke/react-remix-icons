import React from "react";
import { Icon, IconProps } from "../Icon";

export type PieChartLineProps = Omit<IconProps, "name">;

export const PieChartLine = (props: PieChartLineProps) => (
  <Icon name="pie-chart-line" {...props} />
);
