import React from "react";
import { Icon, IconProps } from "../Icon";

export type PencilRuler2FillProps = Omit<IconProps, "name">;

export const PencilRuler2Fill = (props: PencilRuler2FillProps) => (
  <Icon name="pencil-ruler-2-fill" {...props} />
);
