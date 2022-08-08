import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailSendLineProps = Omit<IconProps, "name">;

export const MailSendLine = (props: MailSendLineProps) => (
  <Icon name="mail-send-line" {...props} />
);
