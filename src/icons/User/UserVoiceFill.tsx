import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserVoiceFillProps = Omit<IconProps, "name">;

export const UserVoiceFill = (props: UserVoiceFillProps) => (
  <Icon name="user-voice-fill" {...props} />
);
