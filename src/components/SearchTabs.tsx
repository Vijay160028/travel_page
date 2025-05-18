import React from 'react';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface SearchTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  tabs: Tab[];
}

const SearchTabs: React.FC<SearchTabsProps> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center whitespace-nowrap space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full transition-all text-xs sm:text-sm ${
            activeTab === tab.id
              ? 'bg-white text-slate-800 shadow-md'
              : 'text-white hover:bg-white/10'
          }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SearchTabs;