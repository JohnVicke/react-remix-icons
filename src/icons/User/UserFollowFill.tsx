import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserFollowFillProps = Omit<IconProps, "name">;

export const UserFollowFill = (props: UserFollowFillProps) => (
  <Icon name="user-follow-fill" {...props} />
);
