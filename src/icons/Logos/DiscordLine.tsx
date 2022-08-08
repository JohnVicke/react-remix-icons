import React from "react";
import { Icon, IconProps } from "../Icon";

export type DiscordLineProps = Omit<IconProps, "name">;

export const DiscordLine = (props: DiscordLineProps) => (
  <Icon name="discord-line" {...props} />
);
