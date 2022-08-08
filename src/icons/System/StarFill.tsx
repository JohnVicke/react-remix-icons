import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarFillProps = Omit<IconProps, "name">;

export const StarFill = (props: StarFillProps) => (
  <Icon name="star-fill" {...props} />
);
