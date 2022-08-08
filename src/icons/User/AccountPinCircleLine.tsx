import React from "react";
import { Icon, IconProps } from "../Icon";

export type AccountPinCircleLineProps = Omit<IconProps, "name">;

export const AccountPinCircleLine = (props: AccountPinCircleLineProps) => (
  <Icon name="account-pin-circle-line" {...props} />
);
