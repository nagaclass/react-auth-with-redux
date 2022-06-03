import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/ui/ui.actions";

const Languages = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{t("ilp")}</h1>
      <div className="flex items-center mt-10">
        <button
          className="cursor-pointer bg-blue-500 px-3 py-2 text-white rounded-lg mr-5"
          onClick={() => dispatch(setLanguage("en"))}
        >
          En
        </button>
        <button
          className="cursor-pointer bg-blue-500 px-3 py-2 text-white rounded-lg mr-5"
          onClick={() => dispatch(setLanguage("fr"))}
        >
          Fr
        </button>
        <button
          className="cursor-pointer bg-blue-500 px-3 py-2 text-white rounded-lg"
          onClick={() => dispatch(setLanguage("jp"))}
        >
          Jp
        </button>
      </div>
    </div>
  );
};

export default Languages;
