import React from "react";
import { Icon, IconProps } from "../Icon";

export type AnticlockwiseLineProps = Omit<IconProps, "name">;

export const AnticlockwiseLine = (props: AnticlockwiseLineProps) => (
  <Icon name="anticlockwise-line" {...props} />
);
