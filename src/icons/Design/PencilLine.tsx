import React from "react";
import { Icon, IconProps } from "../Icon";

export type PencilLineProps = Omit<IconProps, "name">;

export const PencilLine = (props: PencilLineProps) => (
  <Icon name="pencil-line" {...props} />
);
