import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScalesLineProps = Omit<IconProps, "name">;

export const ScalesLine = (props: ScalesLineProps) => (
  <Icon name="scales-line" {...props} />
);
