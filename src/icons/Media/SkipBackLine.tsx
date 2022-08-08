import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkipBackLineProps = Omit<IconProps, "name">;

export const SkipBackLine = (props: SkipBackLineProps) => (
  <Icon name="skip-back-line" {...props} />
);
