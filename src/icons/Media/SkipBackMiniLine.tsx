import React from "react";
import { Icon, IconProps } from "../Icon";

export type SkipBackMiniLineProps = Omit<IconProps, "name">;

export const SkipBackMiniLine = (props: SkipBackMiniLineProps) => (
  <Icon name="skip-back-mini-line" {...props} />
);
