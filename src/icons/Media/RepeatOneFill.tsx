import React from "react";
import { Icon, IconProps } from "../Icon";

export type RepeatOneFillProps = Omit<IconProps, "name">;

export const RepeatOneFill = (props: RepeatOneFillProps) => (
  <Icon name="repeat-one-fill" {...props} />
);
