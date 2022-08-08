import React from "react";
import { Icon, IconProps } from "../Icon";

export type LogoutCircleLineProps = Omit<IconProps, "name">;

export const LogoutCircleLine = (props: LogoutCircleLineProps) => (
  <Icon name="logout-circle-line" {...props} />
);
