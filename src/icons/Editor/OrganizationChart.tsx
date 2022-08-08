import React from "react";
import { Icon, IconProps } from "../Icon";

export type OrganizationChartProps = Omit<IconProps, "name">;

export const OrganizationChart = (props: OrganizationChartProps) => (
  <Icon name="organization-chart" {...props} />
);
