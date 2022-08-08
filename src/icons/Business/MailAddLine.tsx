import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailAddLineProps = Omit<IconProps, "name">;

export const MailAddLine = (props: MailAddLineProps) => (
  <Icon name="mail-add-line" {...props} />
);
