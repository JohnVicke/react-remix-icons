import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailOpenFillProps = Omit<IconProps, "name">;

export const MailOpenFill = (props: MailOpenFillProps) => (
  <Icon name="mail-open-fill" {...props} />
);
