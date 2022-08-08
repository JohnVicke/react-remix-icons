import React from "react";
import { Icon, IconProps } from "../Icon";

export type Notification3LineProps = Omit<IconProps, "name">;

export const Notification3Line = (props: Notification3LineProps) => (
  <Icon name="notification-3-line" {...props} />
);
