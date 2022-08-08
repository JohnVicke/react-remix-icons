import React from "react";
import { Icon, IconProps } from "../Icon";

export type MarkupLineProps = Omit<IconProps, "name">;

export const MarkupLine = (props: MarkupLineProps) => (
  <Icon name="markup-line" {...props} />
);
