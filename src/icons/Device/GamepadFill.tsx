import React from "react";
import { Icon, IconProps } from "../Icon";

export type GamepadFillProps = Omit<IconProps, "name">;

export const GamepadFill = (props: GamepadFillProps) => (
  <Icon name="gamepad-fill" {...props} />
);
