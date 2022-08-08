import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeadphoneFillProps = Omit<IconProps, "name">;

export const HeadphoneFill = (props: HeadphoneFillProps) => (
  <Icon name="headphone-fill" {...props} />
);
