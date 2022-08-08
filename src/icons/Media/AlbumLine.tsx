import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlbumLineProps = Omit<IconProps, "name">;

export const AlbumLine = (props: AlbumLineProps) => (
  <Icon name="album-line" {...props} />
);
