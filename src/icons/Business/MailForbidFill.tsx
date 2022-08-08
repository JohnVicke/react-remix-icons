import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailForbidFillProps = Omit<IconProps, "name">;

export const MailForbidFill = (props: MailForbidFillProps) => (
  <Icon name="mail-forbid-fill" {...props} />
);
