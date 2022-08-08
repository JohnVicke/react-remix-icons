import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserHeartLineProps = Omit<IconProps, "name">;

export const UserHeartLine = (props: UserHeartLineProps) => (
  <Icon name="user-heart-line" {...props} />
);
