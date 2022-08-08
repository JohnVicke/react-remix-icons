import React from "react";
import { Icon, IconProps } from "../Icon";

export type CupLineProps = Omit<IconProps, "name">;

export const CupLine = (props: CupLineProps) => (
  <Icon name="cup-line" {...props} />
);
