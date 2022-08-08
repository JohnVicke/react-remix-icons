import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlagFillProps = Omit<IconProps, "name">;

export const FlagFill = (props: FlagFillProps) => (
  <Icon name="flag-fill" {...props} />
);
