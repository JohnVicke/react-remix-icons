import React from "react";
import { Icon, IconProps } from "../Icon";

export type FontColorProps = Omit<IconProps, "name">;

export const FontColor = (props: FontColorProps) => (
  <Icon name="font-color" {...props} />
);
