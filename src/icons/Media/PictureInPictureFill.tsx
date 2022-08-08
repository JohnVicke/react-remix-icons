import React from "react";
import { Icon, IconProps } from "../Icon";

export type PictureInPictureFillProps = Omit<IconProps, "name">;

export const PictureInPictureFill = (props: PictureInPictureFillProps) => (
  <Icon name="picture-in-picture-fill" {...props} />
);
