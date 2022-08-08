import React from "react";
import { Icon, IconProps } from "../Icon";

export type BracesFillProps = Omit<IconProps, "name">;

export const BracesFill = (props: BracesFillProps) => (
  <Icon name="braces-fill" {...props} />
);
