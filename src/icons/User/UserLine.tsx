import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserLineProps = Omit<IconProps, "name">;

export const UserLine = (props: UserLineProps) => (
  <Icon name="user-line" {...props} />
);
