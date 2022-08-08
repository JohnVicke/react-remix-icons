import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxCircleLineProps = Omit<IconProps, "name">;

export const CheckboxCircleLine = (props: CheckboxCircleLineProps) => (
  <Icon name="checkbox-circle-line" {...props} />
);
