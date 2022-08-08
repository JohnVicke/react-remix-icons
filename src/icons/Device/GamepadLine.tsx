import React from "react";
import { Icon, IconProps } from "../Icon";

export type GamepadLineProps = Omit<IconProps, "name">;

export const GamepadLine = (props: GamepadLineProps) => (
  <Icon name="gamepad-line" {...props} />
);
