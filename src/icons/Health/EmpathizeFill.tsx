import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmpathizeFillProps = Omit<IconProps, "name">;

export const EmpathizeFill = (props: EmpathizeFillProps) => (
  <Icon name="empathize-fill" {...props} />
);
