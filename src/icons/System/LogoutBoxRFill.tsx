import React from "react";
import { Icon, IconProps } from "../Icon";

export type LogoutBoxRFillProps = Omit<IconProps, "name">;

export const LogoutBoxRFill = (props: LogoutBoxRFillProps) => (
  <Icon name="logout-box-r-fill" {...props} />
);
