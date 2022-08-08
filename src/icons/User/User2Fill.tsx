import React from "react";
import { Icon, IconProps } from "../Icon";

export type User2FillProps = Omit<IconProps, "name">;

export const User2Fill = (props: User2FillProps) => (
  <Icon name="user-2-fill" {...props} />
);
