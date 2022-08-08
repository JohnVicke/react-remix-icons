import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScissorsCutFillProps = Omit<IconProps, "name">;

export const ScissorsCutFill = (props: ScissorsCutFillProps) => (
  <Icon name="scissors-cut-fill" {...props} />
);
