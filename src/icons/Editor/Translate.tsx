import React from "react";
import { Icon, IconProps } from "../Icon";

export type TranslateProps = Omit<IconProps, "name">;

export const Translate = (props: TranslateProps) => (
  <Icon name="translate" {...props} />
);
