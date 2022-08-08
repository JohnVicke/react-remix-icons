import React from "react";
import { Icon, IconProps } from "../Icon";

export type Cake3FillProps = Omit<IconProps, "name">;

export const Cake3Fill = (props: Cake3FillProps) => (
  <Icon name="cake-3-fill" {...props} />
);
