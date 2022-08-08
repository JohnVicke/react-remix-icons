import React from "react";
import { Icon, IconProps } from "../Icon";

export type Tv2FillProps = Omit<IconProps, "name">;

export const Tv2Fill = (props: Tv2FillProps) => (
  <Icon name="tv-2-fill" {...props} />
);
