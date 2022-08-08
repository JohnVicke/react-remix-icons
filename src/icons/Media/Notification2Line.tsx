import React from "react";
import { Icon, IconProps } from "../Icon";

export type Notification2LineProps = Omit<IconProps, "name">;

export const Notification2Line = (props: Notification2LineProps) => (
  <Icon name="notification-2-line" {...props} />
);
