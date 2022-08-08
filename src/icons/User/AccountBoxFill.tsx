import React from "react";
import { Icon, IconProps } from "../Icon";

export type AccountBoxFillProps = Omit<IconProps, "name">;

export const AccountBoxFill = (props: AccountBoxFillProps) => (
  <Icon name="account-box-fill" {...props} />
);
