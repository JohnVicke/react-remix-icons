import React from "react";
import { Icon, IconProps } from "../Icon";

export type PictureInPictureExitFillProps = Omit<IconProps, "name">;

export const PictureInPictureExitFill = (
  props: PictureInPictureExitFillProps
) => <Icon name="picture-in-picture-exit-fill" {...props} />;
