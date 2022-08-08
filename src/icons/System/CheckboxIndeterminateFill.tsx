import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxIndeterminateFillProps = Omit<IconProps, "name">;

export const CheckboxIndeterminateFill = (
  props: CheckboxIndeterminateFillProps
) => <Icon name="checkbox-indeterminate-fill" {...props} />;
