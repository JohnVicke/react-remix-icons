import React from "react";
import { Icon, IconProps } from "../Icon";

export type TvFillProps = Omit<IconProps, "name">;

export const TvFill = (props: TvFillProps) => (
  <Icon name="tv-fill" {...props} />
);
