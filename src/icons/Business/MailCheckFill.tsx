import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailCheckFillProps = Omit<IconProps, "name">;

export const MailCheckFill = (props: MailCheckFillProps) => (
  <Icon name="mail-check-fill" {...props} />
);
