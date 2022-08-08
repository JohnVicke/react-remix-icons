import React from "react";
import { Icon, IconProps } from "../Icon";

export type SeedlingFillProps = Omit<IconProps, "name">;

export const SeedlingFill = (props: SeedlingFillProps) => (
  <Icon name="seedling-fill" {...props} />
);
