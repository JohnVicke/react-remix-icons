import React from "react";
import { Icon, IconProps } from "../Icon";

export type InputCursorMoveProps = Omit<IconProps, "name">;

export const InputCursorMove = (props: InputCursorMoveProps) => (
  <Icon name="input-cursor-move" {...props} />
);
