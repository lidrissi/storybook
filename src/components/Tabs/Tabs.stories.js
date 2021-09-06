import React, { useState } from "react";
import Tabs from "./Tabs";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

export default {
  title: "Tabs",
  component: Tabs,
  decorators: [
    StoryRouter(),
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs,
  ],
};

const TABS = [
  {
    id: 'tab1',
    label: 'Tab 1',
  },
  {
    id: 'tab2',
    label: 'Tab 2',
  }
]
const ButtonType = ["primary","primary-steps","success","danger","secondary"]

export const Primary = () =>  {
  const [currentTab, setCurrentTab] = useState();

  return <Tabs
    tabs={TABS}
    activeTab={currentTab}
    chooseType={select("select a type", ButtonType,"primary")}
    onChange={(status)=>console.log(status)}
    selectTab={(tab) => setCurrentTab(tab)} />
};
export const SimpleType = () =>  {
  const [currentTab, setCurrentTab] = useState();

  return <Tabs
    tabs={TABS}
    type={"simple"}
    chooseType={select("select a type", ButtonType,"primary")}
    activeTab={currentTab}
    onChange={(status)=>console.log(status)}
    selectTab={(tab) => setCurrentTab(tab)} />
}
