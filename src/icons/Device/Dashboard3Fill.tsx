import React from "react";
import { Icon, IconProps } from "../Icon";

export type Dashboard3FillProps = Omit<IconProps, "name">;

export const Dashboard3Fill = (props: Dashboard3FillProps) => (
  <Icon name="dashboard-3-fill" {...props} />
);
