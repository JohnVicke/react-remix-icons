import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareForwardFillProps = Omit<IconProps, "name">;

export const ShareForwardFill = (props: ShareForwardFillProps) => (
  <Icon name="share-forward-fill" {...props} />
);
