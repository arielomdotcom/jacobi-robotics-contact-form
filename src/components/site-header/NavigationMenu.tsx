import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import ListItem from "./ListItem";
import navigationMenuData from "./NavigationMenuData";

const getRandomMenuComponentsSubset = (
  arr: { title: string; href: string; description: string }[],
  subsetSize: number
): { title: string; href: string; description: string }[] =>
  [...arr].sort(() => 0.5 - Math.random()).slice(0, subsetSize);

const menuGridClasses =
  "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]";

const NavigationMenuComponent: React.FC = () => {
  return (
    <NavigationMenu className="flex-none items-center justify-center max-w-max">
      <NavigationMenuList className="items-center justify-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={menuGridClasses}>
              {getRandomMenuComponentsSubset(navigationMenuData, 4).map(
                (component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={menuGridClasses}>
              {getRandomMenuComponentsSubset(navigationMenuData, 3).map(
                (component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={menuGridClasses}>
              {getRandomMenuComponentsSubset(navigationMenuData, 6).map(
                (component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a href="/blog" className="p-3">
            Blog
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;
