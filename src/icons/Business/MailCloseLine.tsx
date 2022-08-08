import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailCloseLineProps = Omit<IconProps, "name">;

export const MailCloseLine = (props: MailCloseLineProps) => (
  <Icon name="mail-close-line" {...props} />
);
