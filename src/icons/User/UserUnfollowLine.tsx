import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserUnfollowLineProps = Omit<IconProps, "name">;

export const UserUnfollowLine = (props: UserUnfollowLineProps) => (
  <Icon name="user-unfollow-line" {...props} />
);
