import React from "react";
import { Icon, IconProps } from "../Icon";

export type Eye2LineProps = Omit<IconProps, "name">;

export const Eye2Line = (props: Eye2LineProps) => (
  <Icon name="eye-2-line" {...props} />
);
