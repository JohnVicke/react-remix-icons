import React from "react";
import { Icon, IconProps } from "../Icon";

export type FloodFillProps = Omit<IconProps, "name">;

export const FloodFill = (props: FloodFillProps) => (
  <Icon name="flood-fill" {...props} />
);
