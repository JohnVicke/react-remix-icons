import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserLocationLineProps = Omit<IconProps, "name">;

export const UserLocationLine = (props: UserLocationLineProps) => (
  <Icon name="user-location-line" {...props} />
);
