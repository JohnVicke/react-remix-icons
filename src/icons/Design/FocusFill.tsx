import React from "react";
import { Icon, IconProps } from "../Icon";

export type FocusFillProps = Omit<IconProps, "name">;

export const FocusFill = (props: FocusFillProps) => (
  <Icon name="focus-fill" {...props} />
);
