import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserVoiceLineProps = Omit<IconProps, "name">;

export const UserVoiceLine = (props: UserVoiceLineProps) => (
  <Icon name="user-voice-line" {...props} />
);
