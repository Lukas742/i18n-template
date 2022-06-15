import {
  FlexBox,
  FlexBoxDirection,
  IllustratedMessage,
  Label,
  Option,
  Select,
  Title,
} from "@ui5/webcomponents-react";
import LanguageCodes from "./LanguageCodes.json";
import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";
import { useEffect, useState } from "react";
import { useI18nBundle } from "@ui5/webcomponents-react-base";

function App() {
  const i18nBundle = useI18nBundle("i18n-template");
  const [language, setStateLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setStateLanguage(e.detail.selectedOption.dataset.codeId);
  };

  useEffect(() => {
    setLanguage(language);
  }, [language]);

  return (
    <>
      <Label>Change language:</Label>
      <br />
      <Select onChange={handleLanguageChange}>
        {LanguageCodes.map((item) => (
          <Option
            data-code-id={item.id}
            key={item.id}
            selected={item.id === language}
          >
            {item.language}
          </Option>
        ))}
      </Select>
      <br />
      <br />
      <FlexBox direction={FlexBoxDirection.Column}>
        <Label>
          This custom translation ("Please wait") will be translated for
          English, German, French and Spanish for all other, the default
          language (en) will be used.
        </Label>
        <Title>{i18nBundle.getText("PLEASE_WAIT")}</Title>
      </FlexBox>
      <br />
      <br />
      <Label>
        The `IllustratedMessage` component has static texts that are
        translatable.
      </Label>
      <IllustratedMessage />
    </>
  );
}

export default App;
