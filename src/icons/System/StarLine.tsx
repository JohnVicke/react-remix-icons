import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarLineProps = Omit<IconProps, "name">;

export const StarLine = (props: StarLineProps) => (
  <Icon name="star-line" {...props} />
);
