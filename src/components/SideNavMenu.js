export const SideNavMenu = ({ items }) => {
  return (
    <div className="mb-3">
      {items.map((menuItem, index) => {
        return (
          <>
            <h3 className="text-xs text-[rgb(187,186,186)]">
              {menuItem.label}
            </h3>
            <ul className="list-none p-1">
              {menuItem.items.map((a, index) => {
                return (
                  <li
                    className="flex cursor-pointer items-center rounded-lg p-1 hover:bg-[rgb(155,155,251)] "
                    key={index}
                  >
                    <span className="mr-1 text-sm">{a.icon}</span>
                    {a.title}
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
};
