import React from "react";
import { Icon, IconProps } from "../Icon";

export type PhoneLockFillProps = Omit<IconProps, "name">;

export const PhoneLockFill = (props: PhoneLockFillProps) => (
  <Icon name="phone-lock-fill" {...props} />
);
