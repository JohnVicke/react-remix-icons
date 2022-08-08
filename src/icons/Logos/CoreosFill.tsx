import React from "react";
import { Icon, IconProps } from "../Icon";

export type CoreosFillProps = Omit<IconProps, "name">;

export const CoreosFill = (props: CoreosFillProps) => (
  <Icon name="coreos-fill" {...props} />
);
