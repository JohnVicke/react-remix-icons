import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserSharedLineProps = Omit<IconProps, "name">;

export const UserSharedLine = (props: UserSharedLineProps) => (
  <Icon name="user-shared-line" {...props} />
);
