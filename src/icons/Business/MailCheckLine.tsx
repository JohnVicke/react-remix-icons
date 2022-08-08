import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailCheckLineProps = Omit<IconProps, "name">;

export const MailCheckLine = (props: MailCheckLineProps) => (
  <Icon name="mail-check-line" {...props} />
);
