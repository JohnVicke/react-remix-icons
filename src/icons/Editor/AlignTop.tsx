import React from "react";
import { Icon, IconProps } from "../Icon";

export type AlignTopProps = Omit<IconProps, "name">;

export const AlignTop = (props: AlignTopProps) => (
  <Icon name="align-top" {...props} />
);
