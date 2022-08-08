import React from "react";
import { Icon, IconProps } from "../Icon";

export type AngularjsFillProps = Omit<IconProps, "name">;

export const AngularjsFill = (props: AngularjsFillProps) => (
  <Icon name="angularjs-fill" {...props} />
);
