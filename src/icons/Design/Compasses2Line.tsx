import React from "react";
import { Icon, IconProps } from "../Icon";

export type Compasses2LineProps = Omit<IconProps, "name">;

export const Compasses2Line = (props: Compasses2LineProps) => (
  <Icon name="compasses-2-line" {...props} />
);
