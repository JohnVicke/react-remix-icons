import React from "react";
import { Icon, IconProps } from "../Icon";

export type DiscordFillProps = Omit<IconProps, "name">;

export const DiscordFill = (props: DiscordFillProps) => (
  <Icon name="discord-fill" {...props} />
);
