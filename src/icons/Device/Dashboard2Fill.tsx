import React from "react";
import { Icon, IconProps } from "../Icon";

export type Dashboard2FillProps = Omit<IconProps, "name">;

export const Dashboard2Fill = (props: Dashboard2FillProps) => (
  <Icon name="dashboard-2-fill" {...props} />
);
