import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailStarLineProps = Omit<IconProps, "name">;

export const MailStarLine = (props: MailStarLineProps) => (
  <Icon name="mail-star-line" {...props} />
);
