import React from "react";
import { Icon, IconProps } from "../Icon";

export type User5FillProps = Omit<IconProps, "name">;

export const User5Fill = (props: User5FillProps) => (
  <Icon name="user-5-fill" {...props} />
);
