import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpotifyLineProps = Omit<IconProps, "name">;

export const SpotifyLine = (props: SpotifyLineProps) => (
  <Icon name="spotify-line" {...props} />
);
