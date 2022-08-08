import React from "react";
import { Icon, IconProps } from "../Icon";

export type Movie2FillProps = Omit<IconProps, "name">;

export const Movie2Fill = (props: Movie2FillProps) => (
  <Icon name="movie-2-fill" {...props} />
);
