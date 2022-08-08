import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxBlankCircleLineProps = Omit<IconProps, "name">;

export const CheckboxBlankCircleLine = (
  props: CheckboxBlankCircleLineProps
) => <Icon name="checkbox-blank-circle-line" {...props} />;
