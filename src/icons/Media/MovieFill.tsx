import React from "react";
import { Icon, IconProps } from "../Icon";

export type MovieFillProps = Omit<IconProps, "name">;

export const MovieFill = (props: MovieFillProps) => (
  <Icon name="movie-fill" {...props} />
);
