import React from "react";
import { Icon, IconProps } from "../Icon";

export type KeyboardBoxFillProps = Omit<IconProps, "name">;

export const KeyboardBoxFill = (props: KeyboardBoxFillProps) => (
  <Icon name="keyboard-box-fill" {...props} />
);
