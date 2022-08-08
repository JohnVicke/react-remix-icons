import React from "react";
import { Icon, IconProps } from "../Icon";

export type PieChartBoxFillProps = Omit<IconProps, "name">;

export const PieChartBoxFill = (props: PieChartBoxFillProps) => (
  <Icon name="pie-chart-box-fill" {...props} />
);
