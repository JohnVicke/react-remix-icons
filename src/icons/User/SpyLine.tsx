import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpyLineProps = Omit<IconProps, "name">;

export const SpyLine = (props: SpyLineProps) => (
  <Icon name="spy-line" {...props} />
);
