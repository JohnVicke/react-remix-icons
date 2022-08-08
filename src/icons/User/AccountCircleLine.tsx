import React from "react";
import { Icon, IconProps } from "../Icon";

export type AccountCircleLineProps = Omit<IconProps, "name">;

export const AccountCircleLine = (props: AccountCircleLineProps) => (
  <Icon name="account-circle-line" {...props} />
);
