import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareFillProps = Omit<IconProps, "name">;

export const ShareFill = (props: ShareFillProps) => (
  <Icon name="share-fill" {...props} />
);
