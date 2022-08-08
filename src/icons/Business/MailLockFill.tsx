import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailLockFillProps = Omit<IconProps, "name">;

export const MailLockFill = (props: MailLockFillProps) => (
  <Icon name="mail-lock-fill" {...props} />
);
