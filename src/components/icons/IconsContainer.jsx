import '../../global.css';

function IconsContainer({ children, iconName }) {
  return (
    <div
      data-sidebar-icon={iconName}
      className="sidebar w-10 h-10 transition-all flex justify-center items-center rounded-md  hover:bg-zinc-200 cursor-pointer"
    >
      {children}
    </div>
  );
}

export default IconsContainer;
