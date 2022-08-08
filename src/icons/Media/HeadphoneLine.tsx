import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeadphoneLineProps = Omit<IconProps, "name">;

export const HeadphoneLine = (props: HeadphoneLineProps) => (
  <Icon name="headphone-line" {...props} />
);
