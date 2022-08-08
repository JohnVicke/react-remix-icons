import React from "react";
import { Icon, IconProps } from "../Icon";

export type Notification2FillProps = Omit<IconProps, "name">;

export const Notification2Fill = (props: Notification2FillProps) => (
  <Icon name="notification-2-fill" {...props} />
);
