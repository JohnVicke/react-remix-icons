import React from "react";
import { Icon, IconProps } from "../Icon";

export type ImageEditLineProps = Omit<IconProps, "name">;

export const ImageEditLine = (props: ImageEditLineProps) => (
  <Icon name="image-edit-line" {...props} />
);
