import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserAddFillProps = Omit<IconProps, "name">;

export const UserAddFill = (props: UserAddFillProps) => (
  <Icon name="user-add-fill" {...props} />
);
