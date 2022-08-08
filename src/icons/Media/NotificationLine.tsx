import React from "react";
import { Icon, IconProps } from "../Icon";

export type NotificationLineProps = Omit<IconProps, "name">;

export const NotificationLine = (props: NotificationLineProps) => (
  <Icon name="notification-line" {...props} />
);
