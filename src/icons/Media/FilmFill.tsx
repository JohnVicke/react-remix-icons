import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilmFillProps = Omit<IconProps, "name">;

export const FilmFill = (props: FilmFillProps) => (
  <Icon name="film-fill" {...props} />
);
