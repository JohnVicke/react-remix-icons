import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareForwardBoxLineProps = Omit<IconProps, "name">;

export const ShareForwardBoxLine = (props: ShareForwardBoxLineProps) => (
  <Icon name="share-forward-box-line" {...props} />
);
