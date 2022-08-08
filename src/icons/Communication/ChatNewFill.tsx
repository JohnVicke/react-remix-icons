import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatNewFillProps = Omit<IconProps, "name">;

export const ChatNewFill = (props: ChatNewFillProps) => (
  <Icon name="chat-new-fill" {...props} />
);
