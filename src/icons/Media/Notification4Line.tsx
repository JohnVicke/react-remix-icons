import React from "react";
import { Icon, IconProps } from "../Icon";

export type Notification4LineProps = Omit<IconProps, "name">;

export const Notification4Line = (props: Notification4LineProps) => (
  <Icon name="notification-4-line" {...props} />
);
