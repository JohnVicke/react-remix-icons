import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailLineProps = Omit<IconProps, "name">;

export const MailLine = (props: MailLineProps) => (
  <Icon name="mail-line" {...props} />
);
