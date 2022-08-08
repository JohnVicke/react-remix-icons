import React from "react";
import { Icon, IconProps } from "../Icon";

export type Notification3FillProps = Omit<IconProps, "name">;

export const Notification3Fill = (props: Notification3FillProps) => (
  <Icon name="notification-3-fill" {...props} />
);
