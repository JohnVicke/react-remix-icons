import React from "react";
import { Icon, IconProps } from "../Icon";

export type RepeatOneLineProps = Omit<IconProps, "name">;

export const RepeatOneLine = (props: RepeatOneLineProps) => (
  <Icon name="repeat-one-line" {...props} />
);
