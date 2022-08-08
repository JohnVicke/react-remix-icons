import React from "react";
import { Icon, IconProps } from "../Icon";

export type AccountPinBoxLineProps = Omit<IconProps, "name">;

export const AccountPinBoxLine = (props: AccountPinBoxLineProps) => (
  <Icon name="account-pin-box-line" {...props} />
);
