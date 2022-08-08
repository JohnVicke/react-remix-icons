import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxMultipleLineProps = Omit<IconProps, "name">;

export const CheckboxMultipleLine = (props: CheckboxMultipleLineProps) => (
  <Icon name="checkbox-multiple-line" {...props} />
);
