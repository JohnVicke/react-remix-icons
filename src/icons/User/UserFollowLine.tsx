import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserFollowLineProps = Omit<IconProps, "name">;

export const UserFollowLine = (props: UserFollowLineProps) => (
  <Icon name="user-follow-line" {...props} />
);
