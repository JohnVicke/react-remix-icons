import React from "react";
import { Icon, IconProps } from "../Icon";

export type GameFillProps = Omit<IconProps, "name">;

export const GameFill = (props: GameFillProps) => (
  <Icon name="game-fill" {...props} />
);
