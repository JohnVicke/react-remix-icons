import React from "react";
import { Icon, IconProps } from "../Icon";

export type PaintLineProps = Omit<IconProps, "name">;

export const PaintLine = (props: PaintLineProps) => (
  <Icon name="paint-line" {...props} />
);
