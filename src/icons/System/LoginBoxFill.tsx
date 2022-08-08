import React from "react";
import { Icon, IconProps } from "../Icon";

export type LoginBoxFillProps = Omit<IconProps, "name">;

export const LoginBoxFill = (props: LoginBoxFillProps) => (
  <Icon name="login-box-fill" {...props} />
);
