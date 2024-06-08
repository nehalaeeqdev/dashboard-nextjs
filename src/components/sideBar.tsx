import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
    LayoutDashboard,
    Newspaper,
    Folders,
    CreditCard,
    Settings,
    User,
    Folder
} from "lucide-react"
import Link from "next/link";

const SideBar = () => {
  return (
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="mr-4 h-4 w-4" />
            <Link href="/">Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="mr-4 h-4 w-4 " />
            <Link href="/posts">Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folder className="mr-4 h-4 w-4" />
            <Link href="/categories">Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-4 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>%P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-4 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>%B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-4 h-4 w-4" />
            <span>Setting</span>
            <CommandShortcut>%S</CommandShortcut>
          </CommandItem>

        </CommandGroup>
      </CommandList>
    </Command>
  );
};
export default SideBar;
