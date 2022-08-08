import React from "react";
import { Icon, IconProps } from "../Icon";

export type NumbersLineProps = Omit<IconProps, "name">;

export const NumbersLine = (props: NumbersLineProps) => (
  <Icon name="numbers-line" {...props} />
);
