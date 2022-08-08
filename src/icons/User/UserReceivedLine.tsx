import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserReceivedLineProps = Omit<IconProps, "name">;

export const UserReceivedLine = (props: UserReceivedLineProps) => (
  <Icon name="user-received-line" {...props} />
);
