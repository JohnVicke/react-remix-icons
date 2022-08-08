import React from "react";
import { Icon, IconProps } from "../Icon";

export type RulerFillProps = Omit<IconProps, "name">;

export const RulerFill = (props: RulerFillProps) => (
  <Icon name="ruler-fill" {...props} />
);
