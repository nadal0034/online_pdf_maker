import React from "react";
import { useSelector } from "react-redux";
import TemplateSelector from "./TemplateSelector";
import PdfMaker from "./PdfMaker";


const AppContent = () => {
  const selectedTemplate = useSelector((state) => state.form.selectedTemplate);
  return selectedTemplate ? <PdfMaker /> : <TemplateSelector />;
};

export default AppContent;
