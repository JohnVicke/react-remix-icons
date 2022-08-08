import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserStarFillProps = Omit<IconProps, "name">;

export const UserStarFill = (props: UserStarFillProps) => (
  <Icon name="user-star-fill" {...props} />
);
