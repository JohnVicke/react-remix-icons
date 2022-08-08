import React from "react";
import { Icon, IconProps } from "../Icon";

export type ImageFillProps = Omit<IconProps, "name">;

export const ImageFill = (props: ImageFillProps) => (
  <Icon name="image-fill" {...props} />
);
