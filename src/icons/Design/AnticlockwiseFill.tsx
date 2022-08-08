import React from "react";
import { Icon, IconProps } from "../Icon";

export type AnticlockwiseFillProps = Omit<IconProps, "name">;

export const AnticlockwiseFill = (props: AnticlockwiseFillProps) => (
  <Icon name="anticlockwise-fill" {...props} />
);
