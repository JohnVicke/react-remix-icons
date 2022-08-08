import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkullFillProps = Omit<IconProps, "name">;

export const SkullFill = (props: SkullFillProps) => (
  <Icon name="skull-fill" {...props} />
);
