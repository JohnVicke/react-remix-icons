import React from "react";
import { Icon, IconProps } from "../Icon";

export type Database2FillProps = Omit<IconProps, "name">;

export const Database2Fill = (props: Database2FillProps) => (
  <Icon name="database-2-fill" {...props} />
);
