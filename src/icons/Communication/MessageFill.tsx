import React from "react";
import { Icon, IconProps } from "../Icon";

export type MessageFillProps = Omit<IconProps, "name">;

export const MessageFill = (props: MessageFillProps) => (
  <Icon name="message-fill" {...props} />
);
