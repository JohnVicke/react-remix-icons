import React from "react";
import { Icon, IconProps } from "../Icon";

export type LogoutBoxFillProps = Omit<IconProps, "name">;

export const LogoutBoxFill = (props: LogoutBoxFillProps) => (
  <Icon name="logout-box-fill" {...props} />
);
