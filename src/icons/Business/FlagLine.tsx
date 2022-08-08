import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlagLineProps = Omit<IconProps, "name">;

export const FlagLine = (props: FlagLineProps) => (
  <Icon name="flag-line" {...props} />
);
