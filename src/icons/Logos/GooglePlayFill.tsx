import React from "react";
import { Icon, IconProps } from "../Icon";

export type GooglePlayFillProps = Omit<IconProps, "name">;

export const GooglePlayFill = (props: GooglePlayFillProps) => (
  <Icon name="google-play-fill" {...props} />
);
