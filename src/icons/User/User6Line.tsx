import React from "react";
import { Icon, IconProps } from "../Icon";

export type User6LineProps = Omit<IconProps, "name">;

export const User6Line = (props: User6LineProps) => (
  <Icon name="user-6-line" {...props} />
);
