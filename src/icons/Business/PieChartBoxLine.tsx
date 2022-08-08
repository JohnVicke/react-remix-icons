import React from "react";
import { Icon, IconProps } from "../Icon";

export type PieChartBoxLineProps = Omit<IconProps, "name">;

export const PieChartBoxLine = (props: PieChartBoxLineProps) => (
  <Icon name="pie-chart-box-line" {...props} />
);
