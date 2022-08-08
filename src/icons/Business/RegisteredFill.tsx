import React from "react";
import { Icon, IconProps } from "../Icon";

export type RegisteredFillProps = Omit<IconProps, "name">;

export const RegisteredFill = (props: RegisteredFillProps) => (
  <Icon name="registered-fill" {...props} />
);
