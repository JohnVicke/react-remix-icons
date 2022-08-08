import React from "react";
import { Icon, IconProps } from "../Icon";

export type ErrorWarningFillProps = Omit<IconProps, "name">;

export const ErrorWarningFill = (props: ErrorWarningFillProps) => (
  <Icon name="error-warning-fill" {...props} />
);
