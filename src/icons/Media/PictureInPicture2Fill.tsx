import React from "react";
import { Icon, IconProps } from "../Icon";

export type PictureInPicture2FillProps = Omit<IconProps, "name">;

export const PictureInPicture2Fill = (props: PictureInPicture2FillProps) => (
  <Icon name="picture-in-picture-2-fill" {...props} />
);
