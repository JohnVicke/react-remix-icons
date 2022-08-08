import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserSearchLineProps = Omit<IconProps, "name">;

export const UserSearchLine = (props: UserSearchLineProps) => (
  <Icon name="user-search-line" {...props} />
);
