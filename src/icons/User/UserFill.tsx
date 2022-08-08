import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserFillProps = Omit<IconProps, "name">;

export const UserFill = (props: UserFillProps) => (
  <Icon name="user-fill" {...props} />
);
