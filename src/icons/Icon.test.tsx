import "@testing-library/jest-dom/extend-expect";

import React from "react";
import fs from "fs";
import path from "path";
import { render } from "@testing-library/react";
import { iconNames } from "./iconNames";

type IconNames = keyof typeof iconNames;

// eslint-disable-next-line
type WithTsxSuffix<T extends string> = `${T}.tsx`;

type IconDirMeta = {
  name: string;
  files: WithTsxSuffix<IconNames>[];
};

const files = fs.readdirSync(__dirname);

const dirs = files.filter(file => {
  const stat = fs.statSync(path.join(__dirname, file));
  return stat.isDirectory();
});

const icons = dirs.reduce<IconDirMeta[]>((prev, curr) => {
  const iconFiles = fs.readdirSync(path.join(__dirname, curr)) as WithTsxSuffix<IconNames>[];
  return [...prev, { name: curr, files: iconFiles }];
}, []);

icons.forEach(({ name: dir, files }) => {
  describe(`${dir}`, () => {
    files.forEach(file => {
      const iconName = file.replace(".tsx", "") as IconNames;
      describe(`icon: ${iconName}`, () => {
        const module = require(path.join(__dirname, dir, file));
        const Icon = module[iconName];
        it("renders without crashing", () => {
          render(<Icon />);
        });
        it("has correct remix-icon classname", () => {
          const { container } = render(<Icon />);
          expect(container.firstChild).toHaveClass(
            `ri-${iconNames[iconName as IconNames]}`
          );
        });
        it("changes remix-icon size when size prop is changed", () => {
          const { container } = render(<Icon size="xl" />);
          expect(container.firstChild).toHaveClass("ri-xl");
        });
      });
    });
  });
});
