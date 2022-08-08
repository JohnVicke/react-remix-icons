import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailFillProps = Omit<IconProps, "name">;

export const MailFill = (props: MailFillProps) => (
  <Icon name="mail-fill" {...props} />
);
