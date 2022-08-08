import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserSharedFillProps = Omit<IconProps, "name">;

export const UserSharedFill = (props: UserSharedFillProps) => (
  <Icon name="user-shared-fill" {...props} />
);
