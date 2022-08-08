import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatDownloadFillProps = Omit<IconProps, "name">;

export const ChatDownloadFill = (props: ChatDownloadFillProps) => (
  <Icon name="chat-download-fill" {...props} />
);
