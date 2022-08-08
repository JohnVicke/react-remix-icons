import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailAddFillProps = Omit<IconProps, "name">;

export const MailAddFill = (props: MailAddFillProps) => (
  <Icon name="mail-add-fill" {...props} />
);
