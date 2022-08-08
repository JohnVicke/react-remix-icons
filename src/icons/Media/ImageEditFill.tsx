import React from "react";
import { Icon, IconProps } from "../Icon";

export type ImageEditFillProps = Omit<IconProps, "name">;

export const ImageEditFill = (props: ImageEditFillProps) => (
  <Icon name="image-edit-fill" {...props} />
);
