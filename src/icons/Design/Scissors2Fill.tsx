import React from "react";
import { Icon, IconProps } from "../Icon";

export type Scissors2FillProps = Omit<IconProps, "name">;

export const Scissors2Fill = (props: Scissors2FillProps) => (
  <Icon name="scissors-2-fill" {...props} />
);
