import React from "react";
import { Icon, IconProps } from "../Icon";

export type PhoneLineProps = Omit<IconProps, "name">;

export const PhoneLine = (props: PhoneLineProps) => (
  <Icon name="phone-line" {...props} />
);
