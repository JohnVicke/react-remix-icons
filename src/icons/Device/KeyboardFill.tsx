import React from "react";
import { Icon, IconProps } from "../Icon";

export type KeyboardFillProps = Omit<IconProps, "name">;

export const KeyboardFill = (props: KeyboardFillProps) => (
  <Icon name="keyboard-fill" {...props} />
);
