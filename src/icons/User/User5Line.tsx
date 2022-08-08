import React from "react";
import { Icon, IconProps } from "../Icon";

export type User5LineProps = Omit<IconProps, "name">;

export const User5Line = (props: User5LineProps) => (
  <Icon name="user-5-line" {...props} />
);
