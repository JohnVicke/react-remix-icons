import React from "react";
import { Icon, IconProps } from "../Icon";

export type DiscFillProps = Omit<IconProps, "name">;

export const DiscFill = (props: DiscFillProps) => (
  <Icon name="disc-fill" {...props} />
);
