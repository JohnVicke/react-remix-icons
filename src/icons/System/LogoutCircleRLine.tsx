import React from "react";
import { Icon, IconProps } from "../Icon";

export type LogoutCircleRLineProps = Omit<IconProps, "name">;

export const LogoutCircleRLine = (props: LogoutCircleRLineProps) => (
  <Icon name="logout-circle-r-line" {...props} />
);
