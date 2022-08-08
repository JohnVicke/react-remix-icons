import React from "react";
import { Icon, IconProps } from "../Icon";

export type LogoutBoxLineProps = Omit<IconProps, "name">;

export const LogoutBoxLine = (props: LogoutBoxLineProps) => (
  <Icon name="logout-box-line" {...props} />
);
