import React from "react";
import { Icon, IconProps } from "../Icon";

export type WalkLineProps = Omit<IconProps, "name">;

export const WalkLine = (props: WalkLineProps) => (
  <Icon name="walk-line" {...props} />
);
