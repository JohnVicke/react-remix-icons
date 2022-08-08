import React from "react";
import { Icon, IconProps } from "../Icon";

export type PhoneLockLineProps = Omit<IconProps, "name">;

export const PhoneLockLine = (props: PhoneLockLineProps) => (
  <Icon name="phone-lock-line" {...props} />
);
