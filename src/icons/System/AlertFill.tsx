import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlertFillProps = Omit<IconProps, "name">;

export const AlertFill = (props: AlertFillProps) => (
  <Icon name="alert-fill" {...props} />
);
