import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareForward2FillProps = Omit<IconProps, "name">;

export const ShareForward2Fill = (props: ShareForward2FillProps) => (
  <Icon name="share-forward-2-fill" {...props} />
);
