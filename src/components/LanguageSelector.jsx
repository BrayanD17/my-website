import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import '../styles/LanguageSelector.css';

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div className="language-selector">
      <ReactFlagsSelect
        selected={language === 'ENG' ? 'US' : 'ES'}
        onSelect={(code) => {
          setLanguage(code === 'US' ? 'ENG' : 'ESP');
        }}
        countries={['US', 'ES']}
        customLabels={{ US: 'ENG', ES: 'ESP' }}
        showSelectedLabel={true}
        fullWidth={false}
      />
    </div>
  );
};

export default LanguageSelector;
