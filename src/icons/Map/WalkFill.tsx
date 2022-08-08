import React from "react";
import { Icon, IconProps } from "../Icon";

export type WalkFillProps = Omit<IconProps, "name">;

export const WalkFill = (props: WalkFillProps) => (
  <Icon name="walk-fill" {...props} />
);
