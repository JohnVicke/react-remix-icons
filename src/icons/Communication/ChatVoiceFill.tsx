import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatVoiceFillProps = Omit<IconProps, "name">;

export const ChatVoiceFill = (props: ChatVoiceFillProps) => (
  <Icon name="chat-voice-fill" {...props} />
);
