import React from "react";
import { Icon, IconProps } from "../Icon";

export type NotificationBadgeLineProps = Omit<IconProps, "name">;

export const NotificationBadgeLine = (props: NotificationBadgeLineProps) => (
  <Icon name="notification-badge-line" {...props} />
);
