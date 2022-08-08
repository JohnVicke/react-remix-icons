import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserLocationFillProps = Omit<IconProps, "name">;

export const UserLocationFill = (props: UserLocationFillProps) => (
  <Icon name="user-location-fill" {...props} />
);
