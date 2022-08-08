import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZzzLineProps = Omit<IconProps, "name">;

export const ZzzLine = (props: ZzzLineProps) => (
  <Icon name="zzz-line" {...props} />
);
