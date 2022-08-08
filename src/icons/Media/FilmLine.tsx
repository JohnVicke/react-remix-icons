import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilmLineProps = Omit<IconProps, "name">;

export const FilmLine = (props: FilmLineProps) => (
  <Icon name="film-line" {...props} />
);
