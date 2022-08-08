import React from "react";
import { Icon, IconProps } from "../Icon";

export type AccountPinBoxFillProps = Omit<IconProps, "name">;

export const AccountPinBoxFill = (props: AccountPinBoxFillProps) => (
  <Icon name="account-pin-box-fill" {...props} />
);
