import React from "react";
import { Icon, IconProps } from "../Icon";

export type MagicFillProps = Omit<IconProps, "name">;

export const MagicFill = (props: MagicFillProps) => (
  <Icon name="magic-fill" {...props} />
);
