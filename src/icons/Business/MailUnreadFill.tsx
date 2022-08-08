import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailUnreadFillProps = Omit<IconProps, "name">;

export const MailUnreadFill = (props: MailUnreadFillProps) => (
  <Icon name="mail-unread-fill" {...props} />
);
