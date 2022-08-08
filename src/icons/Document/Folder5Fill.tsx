import React from "react";
import { Icon, IconProps } from "../Icon";

export type Folder5FillProps = Omit<IconProps, "name">;

export const Folder5Fill = (props: Folder5FillProps) => (
  <Icon name="folder-5-fill" {...props} />
);
