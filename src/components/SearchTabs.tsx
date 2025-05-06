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
    <div className="flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
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