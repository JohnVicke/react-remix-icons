import React from "react";
import { Icon, IconProps } from "../Icon";

export type Movie2LineProps = Omit<IconProps, "name">;

export const Movie2Line = (props: Movie2LineProps) => (
  <Icon name="movie-2-line" {...props} />
);
