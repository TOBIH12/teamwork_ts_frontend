import { MdTrendingUp } from 'react-icons/md';
import { MdDateRange } from 'react-icons/md';
import { Events, TrendingTopics } from '../dummydata/data';

const RightNav = () => {
  return (
    <div className="hidden fixed lg:flex flex-col items-center bg-white max-h-[90vh] min-w-xs right-0 mt-16 border-l border-gray-200 p-4 select-none scrollbar-none overflow-y-auto">
      <div className="w-full flex flex-col border border-gray-200 rounded-xl my-5">
        <h1 className="w-full flex items-center gap-2 font-medium p-4 text-lg">
          <MdTrendingUp className="theme_text text-2xl" />
          Trending Topics
        </h1>

        <ul className="flex flex-col gap-2 mb-3">
          {TrendingTopics.map((topic) => (
            <li
              key={topic.id}
              className="w-full flex items-center justify-between text-gray-500 text-sm px-4 hover:ml-1 hover:text-[#27aa83] transition duration-300 cursor-pointer"
            >
              <p>#{topic.category}</p>
              <span>{topic.posts} posts</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full flex flex-col border border-gray-200 rounded-xl my-2">
        <h1 className="w-full flex items-center gap-2 font-medium p-4 text-lg">
          <MdDateRange className="theme_text text-2xl" />
          Upcoming Events
        </h1>

        <ul className="flex flex-col gap-3 mb-3 px-4 py-1">
          {Events.map((event) => (
            <li
              key={event.id}
              className="w-full flex flex-col bg-[#27aa83]/5 hover:bg-[#27aa83]/10 rounded-xl p-2 cursor-pointer transition duration-200"
            >
              <h3>{event.title}</h3>
              <span className="text-sm text-gray-500">
                {event.date} at {event.time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="w-full flex gap-2 border-t border-gray-200 py-2 px-4 mt-3">
        <li className="text-xs text-gray-500 hover:text-gray-900">About</li>
        <li className="text-xs text-gray-500 hover:text-gray-900">Terms</li>
        <li className="text-xs text-gray-500 hover:text-gray-900">Privacy</li>
        <li className="text-xs text-gray-500 hover:text-gray-900">Help</li>
      </ul>
    </div>
  );
};

export default RightNav;
