import React from "react";
import { Icon, IconProps } from "../Icon";

export type MarkupFillProps = Omit<IconProps, "name">;

export const MarkupFill = (props: MarkupFillProps) => (
  <Icon name="markup-fill" {...props} />
);
