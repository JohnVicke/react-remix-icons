import React from "react";
import { Icon, IconProps } from "../Icon";

export type ZzzFillProps = Omit<IconProps, "name">;

export const ZzzFill = (props: ZzzFillProps) => (
  <Icon name="zzz-fill" {...props} />
);
