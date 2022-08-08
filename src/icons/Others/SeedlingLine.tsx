import React from "react";
import { Icon, IconProps } from "../Icon";

export type SeedlingLineProps = Omit<IconProps, "name">;

export const SeedlingLine = (props: SeedlingLineProps) => (
  <Icon name="seedling-line" {...props} />
);
