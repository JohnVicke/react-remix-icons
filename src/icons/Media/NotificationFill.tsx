import React from "react";
import { Icon, IconProps } from "../Icon";

export type NotificationFillProps = Omit<IconProps, "name">;

export const NotificationFill = (props: NotificationFillProps) => (
  <Icon name="notification-fill" {...props} />
);
