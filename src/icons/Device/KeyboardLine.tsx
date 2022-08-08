import React from "react";
import { Icon, IconProps } from "../Icon";

export type KeyboardLineProps = Omit<IconProps, "name">;

export const KeyboardLine = (props: KeyboardLineProps) => (
  <Icon name="keyboard-line" {...props} />
);
