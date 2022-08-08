import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlbumFillProps = Omit<IconProps, "name">;

export const AlbumFill = (props: AlbumFillProps) => (
  <Icon name="album-fill" {...props} />
);
