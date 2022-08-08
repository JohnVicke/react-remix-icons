import React from "react";
import { Icon, IconProps } from "../Icon";

export type CollageLineProps = Omit<IconProps, "name">;

export const CollageLine = (props: CollageLineProps) => (
  <Icon name="collage-line" {...props} />
);
