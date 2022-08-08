import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailCloseFillProps = Omit<IconProps, "name">;

export const MailCloseFill = (props: MailCloseFillProps) => (
  <Icon name="mail-close-fill" {...props} />
);
