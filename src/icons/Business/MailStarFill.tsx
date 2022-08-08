import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailStarFillProps = Omit<IconProps, "name">;

export const MailStarFill = (props: MailStarFillProps) => (
  <Icon name="mail-star-fill" {...props} />
);
