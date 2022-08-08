import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserStarLineProps = Omit<IconProps, "name">;

export const UserStarLine = (props: UserStarLineProps) => (
  <Icon name="user-star-line" {...props} />
);
