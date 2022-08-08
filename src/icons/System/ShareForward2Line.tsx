import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShareForward2LineProps = Omit<IconProps, "name">;

export const ShareForward2Line = (props: ShareForward2LineProps) => (
  <Icon name="share-forward-2-line" {...props} />
);
