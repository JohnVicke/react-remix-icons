import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserShared2FillProps = Omit<IconProps, "name">;

export const UserShared2Fill = (props: UserShared2FillProps) => (
  <Icon name="user-shared-2-fill" {...props} />
);
