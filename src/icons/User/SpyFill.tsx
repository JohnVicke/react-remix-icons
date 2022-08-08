import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpyFillProps = Omit<IconProps, "name">;

export const SpyFill = (props: SpyFillProps) => (
  <Icon name="spy-fill" {...props} />
);
