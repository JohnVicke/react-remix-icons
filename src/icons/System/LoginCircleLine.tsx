import React from "react";
import { Icon, IconProps } from "../Icon";

export type LoginCircleLineProps = Omit<IconProps, "name">;

export const LoginCircleLine = (props: LoginCircleLineProps) => (
  <Icon name="login-circle-line" {...props} />
);
