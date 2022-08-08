import React from "react";
import { Icon, IconProps } from "../Icon";

export type AccountPinCircleFillProps = Omit<IconProps, "name">;

export const AccountPinCircleFill = (props: AccountPinCircleFillProps) => (
  <Icon name="account-pin-circle-fill" {...props} />
);
