import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareCircleLineProps = Omit<IconProps, "name">;

export const ShareCircleLine = (props: ShareCircleLineProps) => (
  <Icon name="share-circle-line" {...props} />
);
