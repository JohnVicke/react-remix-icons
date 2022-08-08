import React from "react";
import { Icon, IconProps } from "../Icon";

export type PhoneFindFillProps = Omit<IconProps, "name">;

export const PhoneFindFill = (props: PhoneFindFillProps) => (
  <Icon name="phone-find-fill" {...props} />
);
