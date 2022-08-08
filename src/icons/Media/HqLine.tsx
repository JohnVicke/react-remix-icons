import React from "react";
import { Icon, IconProps } from "../Icon";

export type HqLineProps = Omit<IconProps, "name">;

export const HqLine = (props: HqLineProps) => (
  <Icon name="hq-line" {...props} />
);
