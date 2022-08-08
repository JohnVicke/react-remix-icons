import React from "react";
import { Icon, IconProps } from "../Icon";

export type User4LineProps = Omit<IconProps, "name">;

export const User4Line = (props: User4LineProps) => (
  <Icon name="user-4-line" {...props} />
);
