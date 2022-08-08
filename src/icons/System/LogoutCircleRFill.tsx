import React from "react";
import { Icon, IconProps } from "../Icon";

export type LogoutCircleRFillProps = Omit<IconProps, "name">;

export const LogoutCircleRFill = (props: LogoutCircleRFillProps) => (
  <Icon name="logout-circle-r-fill" {...props} />
);
