import React from "react";
import { Icon, IconProps } from "../Icon";

export type RepeatLineProps = Omit<IconProps, "name">;

export const RepeatLine = (props: RepeatLineProps) => (
  <Icon name="repeat-line" {...props} />
);
