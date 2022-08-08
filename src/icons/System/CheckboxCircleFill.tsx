import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxCircleFillProps = Omit<IconProps, "name">;

export const CheckboxCircleFill = (props: CheckboxCircleFillProps) => (
  <Icon name="checkbox-circle-fill" {...props} />
);
