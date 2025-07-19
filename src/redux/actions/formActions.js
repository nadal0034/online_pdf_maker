import {
  SET_HEADER,
  SET_EXPERIENCES,
  SET_EDUCATION,
  SET_SKILLS,
  SET_SKILL_INPUT,
  SET_SUMMARY,
  SET_SELECTED_TEMPLATE
} from "../types/formTypes";

export const setHeader = (payload) => ({
  type: SET_HEADER,
  payload,
});

export const setExperiences = (payload) => ({
  type: SET_EXPERIENCES,
  payload,
});

export const setEducation = (payload) => ({
  type: SET_EDUCATION,
  payload,
});

export const setSkills = (payload) => ({
  type: SET_SKILLS,
  payload,
});

export const setSkillInput = (payload) => ({
  type: SET_SKILL_INPUT,
  payload,
});

export const setSummary = (payload) => ({
  type: SET_SUMMARY,
  payload,
});

export const setSelectedTemplate = (payload) => ({
  type: SET_SELECTED_TEMPLATE,
  payload,
});