import React from "react";
import { Icon, IconProps } from "../Icon";

export type GameLineProps = Omit<IconProps, "name">;

export const GameLine = (props: GameLineProps) => (
  <Icon name="game-line" {...props} />
);
