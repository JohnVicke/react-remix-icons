import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserReceivedFillProps = Omit<IconProps, "name">;

export const UserReceivedFill = (props: UserReceivedFillProps) => (
  <Icon name="user-received-fill" {...props} />
);
