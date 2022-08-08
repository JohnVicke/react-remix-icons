import React from "react";
import { Icon, IconProps } from "../Icon";

export type MovieLineProps = Omit<IconProps, "name">;

export const MovieLine = (props: MovieLineProps) => (
  <Icon name="movie-line" {...props} />
);
