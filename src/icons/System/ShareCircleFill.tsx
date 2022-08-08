import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareCircleFillProps = Omit<IconProps, "name">;

export const ShareCircleFill = (props: ShareCircleFillProps) => (
  <Icon name="share-circle-fill" {...props} />
);
