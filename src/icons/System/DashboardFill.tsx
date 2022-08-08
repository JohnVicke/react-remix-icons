import React from "react";
import { Icon, IconProps } from "../Icon";

export type DashboardFillProps = Omit<IconProps, "name">;

export const DashboardFill = (props: DashboardFillProps) => (
  <Icon name="dashboard-fill" {...props} />
);
