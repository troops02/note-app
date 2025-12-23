import {
  NoteIcon,
  Settings,
  Reminder,
  Tag,
  Trash,
  Folder,
  IconsContainer,
  Archive,
} from '../../icons';

function SidebarItem() {
  return (
    <aside>
      <nav className="w-14 border-r border-r-zinc-200 h-screen bg-white flex flex-col gap-1 p-2">
        <IconsContainer iconName={'Folder'}>
          <Folder />
        </IconsContainer>
        <div className="mt-5 gap-1">
          <IconsContainer iconName={'Notes'}>
            <NoteIcon />
          </IconsContainer>
          <IconsContainer iconName={'Reminder'}>
            <Reminder />
          </IconsContainer>
          <IconsContainer iconName={'Tag'}>
            <Tag />
          </IconsContainer>
          <IconsContainer iconName={'Archive'}>
            <Archive />
          </IconsContainer>
          <IconsContainer iconName={'Trash'}>
            <Trash />
          </IconsContainer>
        </div>
        <div className="mt-auto gap-1">
          <IconsContainer iconName={'Profile'}>
            <div className="w-7 h-7 rounded-full bg-purple-300 flex">
              <span className="font-medium text-purple-500 m-auto">T</span>
            </div>
          </IconsContainer>
          <IconsContainer iconName={'Settings'}>
            <Settings />
          </IconsContainer>
        </div>
      </nav>
    </aside>
  );
}

export default SidebarItem;
