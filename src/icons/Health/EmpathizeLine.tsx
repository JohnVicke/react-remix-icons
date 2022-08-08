import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmpathizeLineProps = Omit<IconProps, "name">;

export const EmpathizeLine = (props: EmpathizeLineProps) => (
  <Icon name="empathize-line" {...props} />
);
