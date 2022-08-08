import React from "react";
import { Icon, IconProps } from "../Icon";

export type LogoutBoxRLineProps = Omit<IconProps, "name">;

export const LogoutBoxRLine = (props: LogoutBoxRLineProps) => (
  <Icon name="logout-box-r-line" {...props} />
);
