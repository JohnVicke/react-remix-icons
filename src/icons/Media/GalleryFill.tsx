import React from "react";
import { Icon, IconProps } from "../Icon";

export type GalleryFillProps = Omit<IconProps, "name">;

export const GalleryFill = (props: GalleryFillProps) => (
  <Icon name="gallery-fill" {...props} />
);
