import React from "react";
import { Icon, IconProps } from "../Icon";

export type DashboardLineProps = Omit<IconProps, "name">;

export const DashboardLine = (props: DashboardLineProps) => (
  <Icon name="dashboard-line" {...props} />
);
