import React from "react";

import Brush from "../../components/Brush";

export default {
    component: "Brush",
    title: "Brush"
}

const Template = (args) => <Brush {...args} /> 

export const Default = Template.bind({});
Default.args = {
    brush: {
        type: 0,
        label: "",      
        selected: false
    }
};

export const Selected = Template.bind({});
Default.args = {
    brush: {
        type: 1,
        label: "Brush",
        selected: false
    }
}