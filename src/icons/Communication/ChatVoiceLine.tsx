import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatVoiceLineProps = Omit<IconProps, "name">;

export const ChatVoiceLine = (props: ChatVoiceLineProps) => (
  <Icon name="chat-voice-line" {...props} />
);
