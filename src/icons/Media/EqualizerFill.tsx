import React from "react";
import { Icon, IconProps } from "../Icon";

export type EqualizerFillProps = Omit<IconProps, "name">;

export const EqualizerFill = (props: EqualizerFillProps) => (
  <Icon name="equalizer-fill" {...props} />
);
