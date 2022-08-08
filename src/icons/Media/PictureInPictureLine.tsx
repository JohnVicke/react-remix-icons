import React from "react";
import { Icon, IconProps } from "../Icon";

export type PictureInPictureLineProps = Omit<IconProps, "name">;

export const PictureInPictureLine = (props: PictureInPictureLineProps) => (
  <Icon name="picture-in-picture-line" {...props} />
);
