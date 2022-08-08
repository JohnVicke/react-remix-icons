import React from "react";
import { Icon, IconProps } from "../Icon";

export type PencilRuler2LineProps = Omit<IconProps, "name">;

export const PencilRuler2Line = (props: PencilRuler2LineProps) => (
  <Icon name="pencil-ruler-2-line" {...props} />
);
