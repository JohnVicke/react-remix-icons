import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareBoxLineProps = Omit<IconProps, "name">;

export const ShareBoxLine = (props: ShareBoxLineProps) => (
  <Icon name="share-box-line" {...props} />
);
