import React from "react";
import { Icon, IconProps } from "../Icon";

export type DossierLineProps = Omit<IconProps, "name">;

export const DossierLine = (props: DossierLineProps) => (
  <Icon name="dossier-line" {...props} />
);
