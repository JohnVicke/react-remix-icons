import React from "react";
import { Icon, IconProps } from "../Icon";

export type User2LineProps = Omit<IconProps, "name">;

export const User2Line = (props: User2LineProps) => (
  <Icon name="user-2-line" {...props} />
);
