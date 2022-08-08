import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxIndeterminateLineProps = Omit<IconProps, "name">;

export const CheckboxIndeterminateLine = (
  props: CheckboxIndeterminateLineProps
) => <Icon name="checkbox-indeterminate-line" {...props} />;
