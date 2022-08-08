import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatQuoteLineProps = Omit<IconProps, "name">;

export const ChatQuoteLine = (props: ChatQuoteLineProps) => (
  <Icon name="chat-quote-line" {...props} />
);
