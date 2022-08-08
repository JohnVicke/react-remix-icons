import React from "react";
import { Icon, IconProps } from "../Icon";

export type TvLineProps = Omit<IconProps, "name">;

export const TvLine = (props: TvLineProps) => (
  <Icon name="tv-line" {...props} />
);
