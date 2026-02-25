import React, { useState } from 'react';
import PersonalInfoTab from './settingstab/PersonalInfoTab';
import CompanyInfoTab from './settingstab/CompanyInfoTab';
import GraphicsTab from './settingstab/GraphicsTab';
import StylingTab from './settingstab/StylingTab';
import SocialMediaTab from './settingstab/SocialMediaTab';

const tabs = [
  { name: 'Personal Info', component: PersonalInfoTab },
  { name: 'Company Info', component: CompanyInfoTab },
  { name: 'Graphics', component: GraphicsTab },
  { name: 'Styling', component: StylingTab },
  { name: 'Social Media', component: SocialMediaTab },
];

function Editor({ formData, setFormData }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:grid md:grid-cols-6">
        <div className="md:col-span-2 md:border-r py-4 md:py-6">
          <h2 className="text-base font-semibold mb-4 md:mb-6">Edit your template</h2>
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-2 md:block md:space-y-2 md:overflow-visible md:whitespace-normal md:pb-0">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.name}>
                <button
                  className={`relative shrink-0 border-b-2 px-4 py-3 text-left md:block md:w-full md:rounded-l-md md:border-b-0 md:border-r-4 md:px-6 md:py-6 ${
                    activeTab === index
                      ? 'border-gray-500 font-medium bg-gray-50 md:bg-gray-100'
                      : 'border-transparent hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                  {activeTab === index && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-500 md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:h-8 md:w-1 md:-translate-y-1/2 md:rounded-l-md"></span>
                  )}
                </button>
                {index !== tabs.length - 1 && <hr className="hidden border-t border-gray-200 md:block" />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="md:col-span-4 py-4 md:px-6 md:py-6">
          <div className="rounded-md bg-gray-100 p-4 sm:p-6 md:max-h-[calc(100vh-10rem)] md:overflow-y-auto">
            <h4 className="pb-4 text-md font-semibold sm:pb-6">{tabs[activeTab].name}</h4>
            <ActiveTabComponent formData={formData} handleChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
