import React from "react";
import { Icon, IconProps } from "../Icon";

export type SwordFillProps = Omit<IconProps, "name">;

export const SwordFill = (props: SwordFillProps) => (
  <Icon name="sword-fill" {...props} />
);
