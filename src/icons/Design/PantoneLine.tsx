import React from "react";
import { Icon, IconProps } from "../Icon";

export type PantoneLineProps = Omit<IconProps, "name">;

export const PantoneLine = (props: PantoneLineProps) => (
  <Icon name="pantone-line" {...props} />
);
