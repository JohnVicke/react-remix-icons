import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxMultipleFillProps = Omit<IconProps, "name">;

export const CheckboxMultipleFill = (props: CheckboxMultipleFillProps) => (
  <Icon name="checkbox-multiple-fill" {...props} />
);
