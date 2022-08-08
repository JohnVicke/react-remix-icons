import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailOpenLineProps = Omit<IconProps, "name">;

export const MailOpenLine = (props: MailOpenLineProps) => (
  <Icon name="mail-open-line" {...props} />
);
