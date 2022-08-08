import React from "react";
import { Icon, IconProps } from "../Icon";

export type MagicLineProps = Omit<IconProps, "name">;

export const MagicLine = (props: MagicLineProps) => (
  <Icon name="magic-line" {...props} />
);
