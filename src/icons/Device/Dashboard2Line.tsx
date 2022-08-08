import React from "react";
import { Icon, IconProps } from "../Icon";

export type Dashboard2LineProps = Omit<IconProps, "name">;

export const Dashboard2Line = (props: Dashboard2LineProps) => (
  <Icon name="dashboard-2-line" {...props} />
);
