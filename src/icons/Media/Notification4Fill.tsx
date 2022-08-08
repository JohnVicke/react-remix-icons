import React from "react";
import { Icon, IconProps } from "../Icon";

export type Notification4FillProps = Omit<IconProps, "name">;

export const Notification4Fill = (props: Notification4FillProps) => (
  <Icon name="notification-4-fill" {...props} />
);
