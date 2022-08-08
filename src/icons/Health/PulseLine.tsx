import React from "react";
import { Icon, IconProps } from "../Icon";

export type PulseLineProps = Omit<IconProps, "name">;

export const PulseLine = (props: PulseLineProps) => (
  <Icon name="pulse-line" {...props} />
);
