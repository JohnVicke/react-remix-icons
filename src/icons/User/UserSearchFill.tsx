import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserSearchFillProps = Omit<IconProps, "name">;

export const UserSearchFill = (props: UserSearchFillProps) => (
  <Icon name="user-search-fill" {...props} />
);
