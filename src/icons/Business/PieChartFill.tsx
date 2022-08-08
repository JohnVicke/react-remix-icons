import React from "react";
import { Icon, IconProps } from "../Icon";

export type PieChartFillProps = Omit<IconProps, "name">;

export const PieChartFill = (props: PieChartFillProps) => (
  <Icon name="pie-chart-fill" {...props} />
);
