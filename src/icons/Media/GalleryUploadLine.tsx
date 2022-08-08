import React from "react";
import { Icon, IconProps } from "../Icon";

export type GalleryUploadLineProps = Omit<IconProps, "name">;

export const GalleryUploadLine = (props: GalleryUploadLineProps) => (
  <Icon name="gallery-upload-line" {...props} />
);
