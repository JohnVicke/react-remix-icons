import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareForwardLineProps = Omit<IconProps, "name">;

export const ShareForwardLine = (props: ShareForwardLineProps) => (
  <Icon name="share-forward-line" {...props} />
);
