import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserHeartFillProps = Omit<IconProps, "name">;

export const UserHeartFill = (props: UserHeartFillProps) => (
  <Icon name="user-heart-fill" {...props} />
);
