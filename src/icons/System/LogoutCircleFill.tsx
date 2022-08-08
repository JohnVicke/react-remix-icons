import React from "react";
import { Icon, IconProps } from "../Icon";

export type LogoutCircleFillProps = Omit<IconProps, "name">;

export const LogoutCircleFill = (props: LogoutCircleFillProps) => (
  <Icon name="logout-circle-fill" {...props} />
);
