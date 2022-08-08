import React from "react";
import { Icon, IconProps } from "../Icon";

export type NumbersFillProps = Omit<IconProps, "name">;

export const NumbersFill = (props: NumbersFillProps) => (
  <Icon name="numbers-fill" {...props} />
);
