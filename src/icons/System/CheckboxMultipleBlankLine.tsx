import React from "react";
import { Icon, IconProps } from "../Icon";

export type CheckboxMultipleBlankLineProps = Omit<IconProps, "name">;

export const CheckboxMultipleBlankLine = (
  props: CheckboxMultipleBlankLineProps
) => <Icon name="checkbox-multiple-blank-line" {...props} />;
