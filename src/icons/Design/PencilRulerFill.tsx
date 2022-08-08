import React from "react";
import { Icon, IconProps } from "../Icon";

export type PencilRulerFillProps = Omit<IconProps, "name">;

export const PencilRulerFill = (props: PencilRulerFillProps) => (
  <Icon name="pencil-ruler-fill" {...props} />
);
