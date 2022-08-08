import React from "react";
import { Icon, IconProps } from "../Icon";

export type SuperscriptProps = Omit<IconProps, "name">;

export const Superscript = (props: SuperscriptProps) => (
  <Icon name="superscript" {...props} />
);
