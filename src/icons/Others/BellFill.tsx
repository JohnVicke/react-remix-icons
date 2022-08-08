import React from "react";
import { Icon, IconProps } from "../Icon";

export type BellFillProps = Omit<IconProps, "name">;

export const BellFill = (props: BellFillProps) => (
  <Icon name="bell-fill" {...props} />
);
