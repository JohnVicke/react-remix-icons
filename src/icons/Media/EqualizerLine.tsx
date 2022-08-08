import React from "react";
import { Icon, IconProps } from "../Icon";

export type EqualizerLineProps = Omit<IconProps, "name">;

export const EqualizerLine = (props: EqualizerLineProps) => (
  <Icon name="equalizer-line" {...props} />
);
