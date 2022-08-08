import React from "react";
import { Icon, IconProps } from "../Icon";

export type SeparatorProps = Omit<IconProps, "name">;

export const Separator = (props: SeparatorProps) => (
  <Icon name="separator" {...props} />
);
