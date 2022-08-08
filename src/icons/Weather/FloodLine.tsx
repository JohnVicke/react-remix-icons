import React from "react";
import { Icon, IconProps } from "../Icon";

export type FloodLineProps = Omit<IconProps, "name">;

export const FloodLine = (props: FloodLineProps) => (
  <Icon name="flood-line" {...props} />
);
