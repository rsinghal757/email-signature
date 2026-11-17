import React, { useState } from 'react';
import PersonalInfoTab from './settingstab/PersonalInfoTab';
import CompanyInfoTab from './settingstab/CompanyInfoTab';
import GraphicsTab from './settingstab/GraphicsTab';
import StylingTab from './settingstab/StylingTab';
import SocialMediaTab from './settingstab/SocialMediaTab';
import SegmentedControl from './ui/SegmentedControl';
const tabs = [{ name: 'Personal', component: PersonalInfoTab }, { name: 'Company', component: CompanyInfoTab }, { name: 'Graphics', component: GraphicsTab }, { name: 'Styling', component: StylingTab }, { name: 'Social', component: SocialMediaTab }];
function Editor({ formData, setFormData }) {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event) => { const { name, value } = event.target; setFormData((prev) => ({ ...prev, [name]: value })); };
  const ActiveTabComponent = tabs[activeTab].component;
  return <div className="editor-panel"><div className="panel-heading"><div><span className="eyebrow">The essentials</span><h2>Your details</h2></div><span className="panel-step">01—05</span></div>
    <SegmentedControl options={tabs.map((tab) => tab.name)} value={activeTab} onChange={setActiveTab} />
    <div className="form-area"><h3>{tabs[activeTab].name}</h3><p className="form-description">{['Start with the details people should know.', 'Add your company and where to find it.', 'Add publicly accessible image links.', 'Choose the type and colors that feel like you.', 'Add links to your social profiles.'][activeTab]}</p><ActiveTabComponent formData={formData} handleChange={handleChange} /></div>
  </div>;
}
export default Editor;
