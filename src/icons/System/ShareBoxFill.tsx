import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareBoxFillProps = Omit<IconProps, "name">;

export const ShareBoxFill = (props: ShareBoxFillProps) => (
  <Icon name="share-box-fill" {...props} />
);
