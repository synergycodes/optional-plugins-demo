import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import Button from "@/components/button/Button";
import IconLanguage from "@/components/icons/IconLanguage";

type Props = {
  className?: string;
};

function LanguageToggle({ className }: Props) {
  const { i18n } = useTranslation();

  const handleClick = useCallback(() => {
    i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
  }, [i18n]);

  return (
    <Button className={className} onClick={handleClick}>
      <IconLanguage className="size-6" />
      <span>{i18n.language.toUpperCase()}</span>
    </Button>
  );
}

export default LanguageToggle;
