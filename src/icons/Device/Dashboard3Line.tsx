import React from "react";
import { Icon, IconProps } from "../Icon";

export type Dashboard3LineProps = Omit<IconProps, "name">;

export const Dashboard3Line = (props: Dashboard3LineProps) => (
  <Icon name="dashboard-3-line" {...props} />
);
