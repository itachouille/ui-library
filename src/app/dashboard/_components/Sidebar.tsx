import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { SIDEBAR_ITEMS } from '@/constants';
import Image from 'next/image';
import UpgradeButton from './UpgradeButton';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="top-16 border-none">
      <SidebarContent className="border-none bg-[#0B0B0B]">
        <SidebarGroup>
          <SidebarMenu className="flex text-[#7E7F81]">
            {SIDEBAR_ITEMS.map(({ category, icon: Icon, items }) => (
              <Collapsible key={category} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {Icon && <Icon />}
                      <span>{category}</span>
                      <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="border-[#1D1D1D]">
                      {items.map(item => (
                        <SidebarMenuSubItem key={item.text}>
                          <SidebarMenuSubButton
                            /*  className={`flex items-center ${
                              item.isActive ? 'text-white' : 'text-[#7E7F81]'
                            }`} */
                            asChild
                          >
                            <a
                              href={item.href}
                              className="flex items-center py-4"
                            >
                              {/*   {item.isActive && (
                                <div className="mr-2 size-2 rounded-full bg-gradient-to-t from-[#FF2900] to-[#FF7A00]" />
                              )} */}
                              {/*  {item.icon && (
                                <span className="mr-2">{item.icon}</span>
                              )} */}
                              {item.icon && (
                                <Image src={item.icon} alt="item icon" />
                              )}

                              <span>{item.text}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                  <SidebarSeparator className="mx-4 bg-[#1D1D1D]" />
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
          <UpgradeButton href="/dashboard/upgrade" className="mt-4" />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
