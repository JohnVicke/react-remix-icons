import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkipBackFillProps = Omit<IconProps, "name">;

export const SkipBackFill = (props: SkipBackFillProps) => (
  <Icon name="skip-back-fill" {...props} />
);
