import React from "react";
import { Icon, IconProps } from "../Icon";

export type TapeLineProps = Omit<IconProps, "name">;

export const TapeLine = (props: TapeLineProps) => (
  <Icon name="tape-line" {...props} />
);
