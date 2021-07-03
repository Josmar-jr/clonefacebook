export function HeaderIcon({ Icon }) {
  return (
    <button
      className="flex items-center 
      cursor-pointer md:px-10 sm:h-14
      md:hover:bg-gray-100 rounded-xl 
      border-b-2 hover:border-blue-500 group"
    >
      <Icon className="h-5 hover:text-blue-500 text-gray-500 text-center sm:h-7 mx-auto hover:text-blue-500" />
    </button>
  );
}
