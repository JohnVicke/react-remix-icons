import React from "react";
import { Icon, IconProps } from "../Icon";

export type AngularjsLineProps = Omit<IconProps, "name">;

export const AngularjsLine = (props: AngularjsLineProps) => (
  <Icon name="angularjs-line" {...props} />
);
