import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileMusicFillProps = Omit<IconProps, "name">;

export const FileMusicFill = (props: FileMusicFillProps) => (
  <Icon name="file-music-fill" {...props} />
);
