import React from "react";
import { Icon, IconProps } from "../Icon";

export type PictureInPictureExitLineProps = Omit<IconProps, "name">;

export const PictureInPictureExitLine = (
  props: PictureInPictureExitLineProps
) => <Icon name="picture-in-picture-exit-line" {...props} />;
