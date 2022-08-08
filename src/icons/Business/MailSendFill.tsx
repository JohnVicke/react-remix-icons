import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailSendFillProps = Omit<IconProps, "name">;

export const MailSendFill = (props: MailSendFillProps) => (
  <Icon name="mail-send-fill" {...props} />
);
