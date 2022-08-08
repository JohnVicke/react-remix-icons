import React from "react";
import { Icon, IconProps } from "../Icon";

export type TwitchLineProps = Omit<IconProps, "name">;

export const TwitchLine = (props: TwitchLineProps) => (
  <Icon name="twitch-line" {...props} />
);
