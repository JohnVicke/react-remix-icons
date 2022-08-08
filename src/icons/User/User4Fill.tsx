import React from "react";
import { Icon, IconProps } from "../Icon";

export type User4FillProps = Omit<IconProps, "name">;

export const User4Fill = (props: User4FillProps) => (
  <Icon name="user-4-fill" {...props} />
);
