import React from "react";
import { Icon, IconProps } from "../Icon";

export type GalleryUploadFillProps = Omit<IconProps, "name">;

export const GalleryUploadFill = (props: GalleryUploadFillProps) => (
  <Icon name="gallery-upload-fill" {...props} />
);
