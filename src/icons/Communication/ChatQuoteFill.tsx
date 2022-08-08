import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatQuoteFillProps = Omit<IconProps, "name">;

export const ChatQuoteFill = (props: ChatQuoteFillProps) => (
  <Icon name="chat-quote-fill" {...props} />
);
