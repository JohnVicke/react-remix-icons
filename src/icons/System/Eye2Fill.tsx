import React from "react";
import { Icon, IconProps } from "../Icon";

export type Eye2FillProps = Omit<IconProps, "name">;

export const Eye2Fill = (props: Eye2FillProps) => (
  <Icon name="eye-2-fill" {...props} />
);
