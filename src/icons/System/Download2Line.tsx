import React from "react";
import { Icon, IconProps } from "../Icon";

export type Download2LineProps = Omit<IconProps, "name">;

export const Download2Line = (props: Download2LineProps) => (
  <Icon name="download-2-line" {...props} />
);
