import React from "react";
import { Icon, IconProps } from "../Icon";

export type Database2LineProps = Omit<IconProps, "name">;

export const Database2Line = (props: Database2LineProps) => (
  <Icon name="database-2-line" {...props} />
);
