import React from "react";
import { Icon, IconProps } from "../Icon";

export type Cake2FillProps = Omit<IconProps, "name">;

export const Cake2Fill = (props: Cake2FillProps) => (
  <Icon name="cake-2-fill" {...props} />
);
