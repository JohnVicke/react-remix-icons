import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailUnreadLineProps = Omit<IconProps, "name">;

export const MailUnreadLine = (props: MailUnreadLineProps) => (
  <Icon name="mail-unread-line" {...props} />
);
