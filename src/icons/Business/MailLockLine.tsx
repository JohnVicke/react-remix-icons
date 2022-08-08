import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailLockLineProps = Omit<IconProps, "name">;

export const MailLockLine = (props: MailLockLineProps) => (
  <Icon name="mail-lock-line" {...props} />
);
