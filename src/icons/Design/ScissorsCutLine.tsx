import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScissorsCutLineProps = Omit<IconProps, "name">;

export const ScissorsCutLine = (props: ScissorsCutLineProps) => (
  <Icon name="scissors-cut-line" {...props} />
);
