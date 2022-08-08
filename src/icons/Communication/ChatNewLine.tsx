import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatNewLineProps = Omit<IconProps, "name">;

export const ChatNewLine = (props: ChatNewLineProps) => (
  <Icon name="chat-new-line" {...props} />
);
