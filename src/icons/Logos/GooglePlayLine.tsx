import React from "react";
import { Icon, IconProps } from "../Icon";

export type GooglePlayLineProps = Omit<IconProps, "name">;

export const GooglePlayLine = (props: GooglePlayLineProps) => (
  <Icon name="google-play-line" {...props} />
);
