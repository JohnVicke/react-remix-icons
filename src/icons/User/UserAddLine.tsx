import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserAddLineProps = Omit<IconProps, "name">;

export const UserAddLine = (props: UserAddLineProps) => (
  <Icon name="user-add-line" {...props} />
);
