import React from "react";
import { Icon, IconProps } from "../Icon";

export type PencilRulerLineProps = Omit<IconProps, "name">;

export const PencilRulerLine = (props: PencilRulerLineProps) => (
  <Icon name="pencil-ruler-line" {...props} />
);
