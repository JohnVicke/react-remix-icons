import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkipBackMiniFillProps = Omit<IconProps, "name">;

export const SkipBackMiniFill = (props: SkipBackMiniFillProps) => (
  <Icon name="skip-back-mini-fill" {...props} />
);
