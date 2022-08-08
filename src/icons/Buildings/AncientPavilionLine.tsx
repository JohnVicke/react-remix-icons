import React from "react";
import { Icon, IconProps } from "../Icon";

export type AncientPavilionLineProps = Omit<IconProps, "name">;

export const AncientPavilionLine = (props: AncientPavilionLineProps) => (
  <Icon name="ancient-pavilion-line" {...props} />
);
