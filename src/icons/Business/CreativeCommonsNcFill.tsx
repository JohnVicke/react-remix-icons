import React from "react";
import { Icon, IconProps } from "../Icon";

export type CreativeCommonsNcFillProps = Omit<IconProps, "name">;

export const CreativeCommonsNcFill = (props: CreativeCommonsNcFillProps) => (
  <Icon name="creative-commons-nc-fill" {...props} />
);
