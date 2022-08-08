import React from "react";
import { Icon, IconProps } from "../Icon";

export type Tv2LineProps = Omit<IconProps, "name">;

export const Tv2Line = (props: Tv2LineProps) => (
  <Icon name="tv-2-line" {...props} />
);
