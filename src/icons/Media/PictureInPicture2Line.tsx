import React from "react";
import { Icon, IconProps } from "../Icon";

export type PictureInPicture2LineProps = Omit<IconProps, "name">;

export const PictureInPicture2Line = (props: PictureInPicture2LineProps) => (
  <Icon name="picture-in-picture-2-line" {...props} />
);
