import {
  SET_HEADER,
  SET_EXPERIENCES,
  SET_EDUCATION,
  SET_SKILLS,
  SET_SKILL_INPUT,
  SET_SUMMARY,
  SET_SELECTED_TEMPLATE
} from "../types/formTypes";

const initialState = {
  header: { name: "", email: "", phone: "", city: "", country: "", pinCode: "" },
  experiences: [{ jobTitle: "", employer: "", city: "", country: "", startDate: "", endDate: "", current: "", description: "" }],
  education: [{ school: "", location: "", degree: "", month: "", year: "", stillEnrolled: "" }],
  skills: [],
  skillInput: "",
  summary: "",
  selectedTemplate: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER:
      return { ...state, header: action.payload };
    case SET_EXPERIENCES:
      return { ...state, experiences: action.payload };
    case SET_EDUCATION:
      return { ...state, education: action.payload };
    case SET_SKILLS:
      return { ...state, skills: action.payload };
    case SET_SKILL_INPUT:
      return { ...state, skillInput: action.payload };
    case SET_SUMMARY:
      return { ...state, summary: action.payload };
    case SET_SELECTED_TEMPLATE:
      return { ...state, selectedTemplate: action.payload };
    default:
      return state;
  }
};

export default formReducer;