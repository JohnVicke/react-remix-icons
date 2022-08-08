import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserShared2LineProps = Omit<IconProps, "name">;

export const UserShared2Line = (props: UserShared2LineProps) => (
  <Icon name="user-shared-2-line" {...props} />
);
