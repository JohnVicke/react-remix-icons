import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatDownloadLineProps = Omit<IconProps, "name">;

export const ChatDownloadLine = (props: ChatDownloadLineProps) => (
  <Icon name="chat-download-line" {...props} />
);
