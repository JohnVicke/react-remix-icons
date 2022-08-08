import React from "react";
import { Icon, IconProps } from "../Icon";

export type Compasses2FillProps = Omit<IconProps, "name">;

export const Compasses2Fill = (props: Compasses2FillProps) => (
  <Icon name="compasses-2-fill" {...props} />
);
