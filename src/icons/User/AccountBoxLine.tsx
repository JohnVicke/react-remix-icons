import React from "react";
import { Icon, IconProps } from "../Icon";

export type AccountBoxLineProps = Omit<IconProps, "name">;

export const AccountBoxLine = (props: AccountBoxLineProps) => (
  <Icon name="account-box-line" {...props} />
);
