import React from "react";
import { Icon, IconProps } from "../Icon";

export type User6FillProps = Omit<IconProps, "name">;

export const User6Fill = (props: User6FillProps) => (
  <Icon name="user-6-fill" {...props} />
);
