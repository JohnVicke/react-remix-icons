import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxBlankCircleFillProps = Omit<IconProps, "name">;

export const CheckboxBlankCircleFill = (
  props: CheckboxBlankCircleFillProps
) => <Icon name="checkbox-blank-circle-fill" {...props} />;
