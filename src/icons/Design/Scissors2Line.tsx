import React from "react";
import { Icon, IconProps } from "../Icon";

export type Scissors2LineProps = Omit<IconProps, "name">;

export const Scissors2Line = (props: Scissors2LineProps) => (
  <Icon name="scissors-2-line" {...props} />
);
