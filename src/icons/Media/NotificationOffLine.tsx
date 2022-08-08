import React from "react";
import { Icon, IconProps } from "../Icon";

export type NotificationOffLineProps = Omit<IconProps, "name">;

export const NotificationOffLine = (props: NotificationOffLineProps) => (
  <Icon name="notification-off-line" {...props} />
);
