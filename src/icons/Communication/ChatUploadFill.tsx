import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatUploadFillProps = Omit<IconProps, "name">;

export const ChatUploadFill = (props: ChatUploadFillProps) => (
  <Icon name="chat-upload-fill" {...props} />
);
