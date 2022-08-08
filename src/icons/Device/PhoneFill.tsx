import React from "react";
import { Icon, IconProps } from "../Icon";

export type PhoneFillProps = Omit<IconProps, "name">;

export const PhoneFill = (props: PhoneFillProps) => (
  <Icon name="phone-fill" {...props} />
);
