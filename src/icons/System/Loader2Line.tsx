import React from "react";
import { Icon, IconProps } from "../Icon";

export type Loader2LineProps = Omit<IconProps, "name">;

export const Loader2Line = (props: Loader2LineProps) => (
  <Icon name="loader-2-line" {...props} />
);
