import React from "react";
import { Icon, IconProps } from "../Icon";

export type NotificationBadgeFillProps = Omit<IconProps, "name">;

export const NotificationBadgeFill = (props: NotificationBadgeFillProps) => (
  <Icon name="notification-badge-fill" {...props} />
);
