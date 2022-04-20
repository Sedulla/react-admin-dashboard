import { Link } from 'react-router-dom';

export const SideNavMenu = ({ items }) => {
  return (
    <div className="mb-3">
      {items.map((menuItem, index) => {
        return (
          <>
            <h3 className="text-sm text-[rgb(187,186,186)]">
              {menuItem.label}
            </h3>
            <ul className="list-none p-1">
              {menuItem.items.map((item, index) => {
                return (
                  <Link className="link" to={`${item.path}`}>
                    <li
                      className="flex cursor-pointer items-center rounded-lg p-1 hover:bg-[rgb(155,155,251)] "
                      key={index}
                    >
                      <span className="mr-1 text-sm">{item.icon}</span>
                      {item.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
};
