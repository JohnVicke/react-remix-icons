import React from "react";
import { Icon, IconProps } from "../Icon";

export type YoutubeFillProps = Omit<IconProps, "name">;

export const YoutubeFill = (props: YoutubeFillProps) => (
  <Icon name="youtube-fill" {...props} />
);
