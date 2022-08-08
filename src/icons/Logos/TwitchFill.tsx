import React from "react";
import { Icon, IconProps } from "../Icon";

export type TwitchFillProps = Omit<IconProps, "name">;

export const TwitchFill = (props: TwitchFillProps) => (
  <Icon name="twitch-fill" {...props} />
);
