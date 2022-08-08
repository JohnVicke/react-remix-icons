import React from "react";
import { Icon, IconProps } from "../Icon";

export type Folder5LineProps = Omit<IconProps, "name">;

export const Folder5Line = (props: Folder5LineProps) => (
  <Icon name="folder-5-line" {...props} />
);
