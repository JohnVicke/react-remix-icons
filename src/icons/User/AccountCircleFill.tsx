import React from "react";
import { Icon, IconProps } from "../Icon";

export type AccountCircleFillProps = Omit<IconProps, "name">;

export const AccountCircleFill = (props: AccountCircleFillProps) => (
  <Icon name="account-circle-fill" {...props} />
);
