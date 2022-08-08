import React from "react";
import { Icon, IconProps } from "../Icon";

export type NotificationOffFillProps = Omit<IconProps, "name">;

export const NotificationOffFill = (props: NotificationOffFillProps) => (
  <Icon name="notification-off-fill" {...props} />
);
