import React from "react";
import { Icon, IconProps } from "../Icon";

export type ErrorWarningLineProps = Omit<IconProps, "name">;

export const ErrorWarningLine = (props: ErrorWarningLineProps) => (
  <Icon name="error-warning-line" {...props} />
);
