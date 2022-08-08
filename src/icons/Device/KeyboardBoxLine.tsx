import React from "react";
import { Icon, IconProps } from "../Icon";

export type KeyboardBoxLineProps = Omit<IconProps, "name">;

export const KeyboardBoxLine = (props: KeyboardBoxLineProps) => (
  <Icon name="keyboard-box-line" {...props} />
);
