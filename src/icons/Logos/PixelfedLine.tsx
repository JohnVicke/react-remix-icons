import React from "react";
import { Icon, IconProps } from "../Icon";

export type PixelfedLineProps = Omit<IconProps, "name">;

export const PixelfedLine = (props: PixelfedLineProps) => (
  <Icon name="pixelfed-line" {...props} />
);
