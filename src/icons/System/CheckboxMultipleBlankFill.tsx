import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxMultipleBlankFillProps = Omit<IconProps, "name">;

export const CheckboxMultipleBlankFill = (
  props: CheckboxMultipleBlankFillProps
) => <Icon name="checkbox-multiple-blank-fill" {...props} />;
