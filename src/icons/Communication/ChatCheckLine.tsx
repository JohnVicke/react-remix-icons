import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatCheckLineProps = Omit<IconProps, "name">;

export const ChatCheckLine = (props: ChatCheckLineProps) => (
  <Icon name="chat-check-line" {...props} />
);
