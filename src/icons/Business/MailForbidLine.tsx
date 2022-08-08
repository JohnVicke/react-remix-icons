import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailForbidLineProps = Omit<IconProps, "name">;

export const MailForbidLine = (props: MailForbidLineProps) => (
  <Icon name="mail-forbid-line" {...props} />
);
