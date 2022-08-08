import React from "react";
import { Icon, IconProps } from "../Icon";

export type HqFillProps = Omit<IconProps, "name">;

export const HqFill = (props: HqFillProps) => (
  <Icon name="hq-fill" {...props} />
);
