import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareLineProps = Omit<IconProps, "name">;

export const ShareLine = (props: ShareLineProps) => (
  <Icon name="share-line" {...props} />
);
