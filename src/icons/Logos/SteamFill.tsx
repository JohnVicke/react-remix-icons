import React from "react";
import { Icon, IconProps } from "../Icon";

export type SteamFillProps = Omit<IconProps, "name">;

export const SteamFill = (props: SteamFillProps) => (
  <Icon name="steam-fill" {...props} />
);
