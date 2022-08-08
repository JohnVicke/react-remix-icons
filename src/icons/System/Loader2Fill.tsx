import React from "react";
import { Icon, IconProps } from "../Icon";

export type Loader2FillProps = Omit<IconProps, "name">;

export const Loader2Fill = (props: Loader2FillProps) => (
  <Icon name="loader-2-fill" {...props} />
);
