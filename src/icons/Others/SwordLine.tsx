import React from "react";
import { Icon, IconProps } from "../Icon";

export type SwordLineProps = Omit<IconProps, "name">;

export const SwordLine = (props: SwordLineProps) => (
  <Icon name="sword-line" {...props} />
);
