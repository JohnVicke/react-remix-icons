import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareForwardBoxFillProps = Omit<IconProps, "name">;

export const ShareForwardBoxFill = (props: ShareForwardBoxFillProps) => (
  <Icon name="share-forward-box-fill" {...props} />
);
