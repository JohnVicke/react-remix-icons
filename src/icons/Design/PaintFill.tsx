import React from "react";
import { Icon, IconProps } from "../Icon";

export type PaintFillProps = Omit<IconProps, "name">;

export const PaintFill = (props: PaintFillProps) => (
  <Icon name="paint-fill" {...props} />
);
