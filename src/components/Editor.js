import React, { useState } from 'react';
import PersonalInfoTab from './settingstab/PersonalInfoTab';
import CompanyInfoTab from './settingstab/CompanyInfoTab';
import GraphicsTab from './settingstab/GraphicsTab';
import StylingTab from './settingstab/StylingTab';
import SocialMediaTab from './settingstab/SocialMediaTab';
import SegmentedControl from './ui/SegmentedControl';
import Card from './ui/Card';

const tabs = [
  { name: 'Personal', component: PersonalInfoTab },
  { name: 'Company', component: CompanyInfoTab },
  { name: 'Graphics', component: GraphicsTab },
  { name: 'Styling', component: StylingTab },
  { name: 'Social', component: SocialMediaTab },
];

function Editor({ formData, setFormData }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <Card className="p-4 sm:p-5">
      <div className="mb-4 space-y-2">
        <h2 className="text-base font-semibold text-slate-900">Form editing</h2>
        <SegmentedControl options={tabs.map((tab) => tab.name)} value={activeTab} onChange={setActiveTab} />
      </div>
      <div className="rounded-ui-md bg-slate-50 p-4 sm:p-5">
        <h3 className="mb-4 text-sm font-semibold text-slate-700">{tabs[activeTab].name}</h3>
        <ActiveTabComponent formData={formData} handleChange={handleChange} />
      </div>
    </Card>
  );
}

export default Editor;
