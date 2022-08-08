import React from "react";
import { Icon, IconProps } from "../Icon";

export type ImageAddFillProps = Omit<IconProps, "name">;

export const ImageAddFill = (props: ImageAddFillProps) => (
  <Icon name="image-add-fill" {...props} />
);
