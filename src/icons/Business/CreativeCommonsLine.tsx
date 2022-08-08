import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsLineProps = Omit<IconProps, "name">;

export const CreativeCommonsLine = (props: CreativeCommonsLineProps) => (
  <Icon name="creative-commons-line" {...props} />
);
