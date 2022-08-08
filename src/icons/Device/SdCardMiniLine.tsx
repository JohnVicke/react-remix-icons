import React from "react";
import { Icon, IconProps } from "../Icon";

export type SdCardMiniLineProps = Omit<IconProps, "name">;

export const SdCardMiniLine = (props: SdCardMiniLineProps) => (
  <Icon name="sd-card-mini-line" {...props} />
);
