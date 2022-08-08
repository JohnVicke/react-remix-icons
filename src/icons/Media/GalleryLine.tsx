import React from "react";
import { Icon, IconProps } from "../Icon";

export type GalleryLineProps = Omit<IconProps, "name">;

export const GalleryLine = (props: GalleryLineProps) => (
  <Icon name="gallery-line" {...props} />
);
