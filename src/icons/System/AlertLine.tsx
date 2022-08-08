import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlertLineProps = Omit<IconProps, "name">;

export const AlertLine = (props: AlertLineProps) => (
  <Icon name="alert-line" {...props} />
);
