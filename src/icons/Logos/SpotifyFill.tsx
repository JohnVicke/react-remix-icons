import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpotifyFillProps = Omit<IconProps, "name">;

export const SpotifyFill = (props: SpotifyFillProps) => (
  <Icon name="spotify-fill" {...props} />
);
