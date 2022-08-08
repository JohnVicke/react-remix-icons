import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatUploadLineProps = Omit<IconProps, "name">;

export const ChatUploadLine = (props: ChatUploadLineProps) => (
  <Icon name="chat-upload-line" {...props} />
);
