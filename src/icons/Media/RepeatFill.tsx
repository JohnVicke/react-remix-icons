import React from "react";
import { Icon, IconProps } from "../Icon";

export type RepeatFillProps = Omit<IconProps, "name">;

export const RepeatFill = (props: RepeatFillProps) => (
  <Icon name="repeat-fill" {...props} />
);
