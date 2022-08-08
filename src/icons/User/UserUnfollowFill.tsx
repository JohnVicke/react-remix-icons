import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserUnfollowFillProps = Omit<IconProps, "name">;

export const UserUnfollowFill = (props: UserUnfollowFillProps) => (
  <Icon name="user-unfollow-fill" {...props} />
);
