import React from "react";
import { Icon, IconProps } from "../Icon";

export type Download2FillProps = Omit<IconProps, "name">;

export const Download2Fill = (props: Download2FillProps) => (
  <Icon name="download-2-fill" {...props} />
);
