import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsNcLineProps = Omit<IconProps, "name">;

export const CreativeCommonsNcLine = (props: CreativeCommonsNcLineProps) => (
  <Icon name="creative-commons-nc-line" {...props} />
);
